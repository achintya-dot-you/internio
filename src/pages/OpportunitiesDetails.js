import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase_setup/firebase-config";
import { db } from "../firebase_setup/firebase-config";
import { collection, getDocs } from "firebase/firestore";

import styles from "./OpportunitiesDetails.module.scss";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import dummy from "../assets/images/opportunities/dummy.jpg";

const ListItem = (props) => {
  const textParts = props.text.split(/(<a.*?<\/a>|\bhttps?:\/\/\S+\b)/); // Split text by existing <a> tags and links

  return (
    <li className={styles[`${props.category}-detail`]}>
      <span className={styles[`${props.category}-text`]}>
        {textParts.map((part, index) => {
          if (part.startsWith("<a") && part.endsWith("</a>")) {
            // If part is an existing <a> tag, render it as-is
            return (
              <span
                key={index}
                dangerouslySetInnerHTML={{ __html: part }}
              />
            );
          } else if (/^https?:\/\/\S+$/i.test(part)) {
            // If part is a link, render it inside a new <a> tag
            return (
              <a
                key={index}
                href={part}
                target='_blank'
                rel='noopener noreferrer'
                className={styles[`${props.category}-link`]}
              >
                {part}
              </a>
            );
          } else {
            // If part is plain text, render it as-is
            return part;
          }
        })}
      </span>
    </li>
  );
};

const ListComponent = (props) => {
  const text = props.text;
  const items = text.split("|");
  return items.map((item, index) => (
    <ListItem
      key={index}
      text={item}
      category={props.category}
    />
  ));
};

const OpportunitiesDetails = () => {
  const { id } = useParams();
  const [imageList, setImageList] = useState([]);
  const [opportunitiesList, setOpportunitiesList] = useState([]);
  const [combinedData, setCombinedData] = useState([]);

  useEffect(() => {
    const fetchOpportunitiesAndImages = async () => {
      // Fetch opportunities data only once
      const opportunitiesData = await getDocs(collection(db, "opportunities"));
      setOpportunitiesList(opportunitiesData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      // Fetch image URLs only once
      const imageRefs = await listAll(ref(storage, "opportunities/"));
      const urls = await Promise.all(imageRefs.items.map(async (item) => getDownloadURL(item)));
      setImageList(urls);
    };

    fetchOpportunitiesAndImages();
  }, []); // Empty dependency array to ensure it runs only once

  useEffect(() => {
    // Combine opportunities and image data
    if (imageList.length > 0 && opportunitiesList.length > 0) {
      const combinedData = opportunitiesList.map((opportunity) => {
        const selectedImage = imageList.find((url) => {
          const imageNameFromURL = url.match(/%2F(.*?)\?/)[1];
          return imageNameFromURL === opportunity.name;
        });

        return { ...opportunity, imageURL: selectedImage || dummy };
      });

      setCombinedData(combinedData);
    }
  }, [imageList, opportunitiesList]);

  const selectedItem = useMemo(() => {
    if (id && combinedData.length > 0) {
      return combinedData.find((item) => item.name === id);
    }
    return null;
  }, [id, combinedData]);

  return (
    <>
      <Navbar />
      {selectedItem && (
        <div className={styles["container"]}>
          <div className={styles["left"]}>
            <h1 className={styles["heading"]}>Chapter Head</h1>
            <div>
              <h2 className={styles["subheading"]}>About {id}</h2>
              <p className={styles["about-details"]}>{selectedItem.about}</p>
            </div>
            <div>
              <h2 className={styles["subheading"]}>Job Description</h2>
              <ul className={styles["list"] + " " + styles["job-description-list"]}>
                <ListComponent
                  text={selectedItem.description}
                  category='job-description'
                />
              </ul>
            </div>
            <div>
              <h2 className={styles["subheading"]}>Requirements</h2>
              <ul className={styles["list"] + " " + styles["requirements-list"]}>
                <ListComponent
                  text={selectedItem.requirements}
                  category='requirements'
                />
              </ul>
            </div>
            <div>
              <a
                href={"https://www.google.com"}
                className={styles["button"]}
              >
                Apply Now
              </a>
              <p className={styles["cta-paragraph"]}>
                Or email us at hiring@internio.app with your resume and the job you’re applying for!
              </p>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default OpportunitiesDetails;
