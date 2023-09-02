import React, { useState, useEffect } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";

import styles from "./OpportunitiesList.module.scss";

import { storage } from "../../firebase_setup/firebase-config";
import { db } from "../../firebase_setup/firebase-config";
import { collection, getDocs } from "firebase/firestore";

import OpportunitiesCard from "./OpportunitiesCard";

import dummy from "../../assets/images/test/dummy.jpg";

const OpportunitiesList = () => {
  const [imageList, setImageList] = useState([]);
  const [opportunitiesList, setOpportunitiesList] = useState([]);
  const [combinedData, setCombinedData] = useState([]);

  useEffect(() => {
    listAll(ref(storage, "opportunities/"))
      .then((response) => {
        const urls = response.items.map(async (item) => {
          const url = await getDownloadURL(item);
          return url;
        });

        Promise.all(urls).then((imageUrls) => {
          setImageList(imageUrls);
        });
      })
      .catch((error) => {
        console.error("Error fetching image list:", error);
      });

    const getOpportunities = async () => {
      const data = await getDocs(collection(db, "opportunities"));
      setOpportunitiesList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getOpportunities();
  }, []);

  useEffect(() => {
    if (imageList.length > 0 && opportunitiesList.length > 0) {
      setCombinedData(
        opportunitiesList.map((opportunity) => {
          const selectedImage = imageList.find((url) => {
            const imageNameFromURL = url.match(/%2F(.*?)\?/)[1];
            console.log(url);

            console.log("----" + opportunity.imagename);
            return imageNameFromURL === opportunity.imagename;
          });
          console.log(selectedImage);

          return { ...opportunity, imageURL: selectedImage };
        })
      );
    }
  }, [imageList, opportunitiesList]);

  return (
    <div className={styles["container"]}>
      {combinedData.map((opportunity, index) => {
        const animationToggle = index % 2 === 0 ? 1 : 2;
        const imageURL = opportunity.imageURL || dummy; // Use dummy image if imageURL is undefined
        return (
          <OpportunitiesCard
            key={opportunity.name}
            imageURL={imageURL}
            alt={opportunity.name}
            heading={opportunity.position}
            term={opportunity.term}
            commitment={opportunity.commitment}
            stipend={opportunity.stipend}
            url={opportunity.name}
            animationToggle={animationToggle}
          />
        );
      })}
    </div>
  );
};

export default OpportunitiesList;
