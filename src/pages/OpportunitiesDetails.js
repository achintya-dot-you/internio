import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import useFirebase from "../hooks/useFirebase";

import styles from "./OpportunitiesDetails.module.scss";

import OpportunitiesForm from "../components/Opportunities/OpportunitiesForm";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import iconImage from "../assets/images/icon.png";

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

const ListComponent = React.memo((props) => {
  const text = props.text;
  const items = text.split("|");
  return items.map((item, index) => (
    <ListItem
      key={index}
      text={item}
      category={props.category}
    />
  ));
});

const LinkDetectedText = React.memo((props) => {
  const textParts = useMemo(
    () => props.text.split(/(<a.*?<\/a>|\bhttps?:\/\/\S+\b)/),
    [props.text]
  );

  return (
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
  );
});

const OpportunitiesDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { combinedData } = useFirebase();

  const selectedItem = useMemo(() => {
    if (id && combinedData.length > 0) {
      setLoading(false);
      return combinedData.find((item) => item.name === id);
    }
    return null;
  }, [id, combinedData]);

  const logoClickHandler = useCallback(
    (e) => {
      e.preventDefault();
      document.location.href = selectedItem.link;
    },
    [selectedItem]
  );

  useEffect(() => {
    if (selectedItem) {
      document.title = `Opportunity | ${selectedItem.position}`;
    } else {
      document.title = "internio | Loading";
    }
  }, [selectedItem]);

  useEffect(() => {
    if (loading === false && !selectedItem) {
      navigate("/404"); // Redirect to the 404 page or any other URL
    }
  }, [loading, navigate, selectedItem]);

  return (
      
    
    <>
      {loading && (
        <div className={styles["loader-container"]}>
          <picture>
            <img
              srcSet={iconImage}
              alt=''
              loading='lazy'
              className={styles["loader"]}
            ></img>
          </picture>
        </div>
      )}
      {selectedItem && !loading && (
        <>
          <Navbar />
          <div className={styles["container"]}>
            <div className={styles["left"]}>
              <h1 className={styles["heading"]}>{selectedItem.position}</h1>
              <img
                src={selectedItem.imageURL}
                alt={selectedItem.company}
                className={styles["logo"]}
                onClick={logoClickHandler}
              />
              <div>
                <h2 className={styles["subheading"]}>About {selectedItem.company}</h2>
                <p className={styles["about-details"]}>
                  <LinkDetectedText text={selectedItem.about} />
                </p>
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
              <Link
                className={styles["button"] + " " + styles["hide-phone"]}
                to='/opportunities'
              >
                &lt;&#45; All Opportunities
              </Link>
            </div>
            
          
          <div className={styles["right"]}>
              <OpportunitiesForm
                company={selectedItem.company}
                position={selectedItem.position}
              />
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default OpportunitiesDetails;