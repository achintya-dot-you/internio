import React from "react";

import styles from "./Team.module.scss";

import data from "../data/Team.json";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import dummyPic from "../assets/images/team/dummy1.jpg";

const getImageSrc = (imagesrc) => {
  try {
    return require("../assets/images/team/" + imagesrc);
  } catch (error) {
    console.log(`Error loading image at path: ${imagesrc}`);
    return null;
  }
};

const Team = () => {
  return (
    <>
      <Navbar />
      <div className={styles["heading-container"]}>
        <h1 className={styles["heading"]}>our team</h1>
      </div>
      <div className={styles["founders-container"]}>
        <div className={styles["founders-frame"]}>
          <div className={styles["founders-picture-container"]}>
            <picture>
              <img
                srcSet={dummyPic}
                alt='dummy'
                loading='lazy'
                className={styles["founders-picture"]}
              />
            </picture>
          </div>
          <div className={styles["founders-content"]}>
            <h3 className={styles["founders-position"]}>Co-Founder</h3>
            <h2 className={styles["founders-name"]}>Achintya Pasricha</h2>
            <p className={styles["founders-desc"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Sed cras ornare arcu dui. In cursus
              turpis massa tincidunt dui ut ornare lectus. Sit amet aliquam id diam maecenas. Sem
              viverra aliquet eget sit amet tellus. Tincidunt praesent semper feugiat nibh sed
              pulvinar proin gravida. Enim sit amet venenatis urna cursus eget. Egestas quis ipsum
              suspendisse ultrices gravida dictum fusce ut. Arcu dui vivamus arcu felis bibendum ut
              tristique.
            </p>
          </div>
        </div>
        <div className={styles["founders-frame"]}>
          <div className={styles["founders-picture-container"]}>
            <picture>
              <img
                srcSet={dummyPic}
                alt='dummy'
                loading='lazy'
                className={styles["founders-picture"]}
              />
            </picture>
          </div>
          <div className={styles["founders-content"]}>
            <h3 className={styles["founders-position"]}>Co-Founder</h3>
            <h2 className={styles["founders-name"]}>Arnav Bhola</h2>
            <p className={styles["founders-desc"]}>
              Ultricies integer quis auctor elit sed. Nullam ac tortor vitae purus faucibus ornare
              suspendisse. Quis imperdiet massa tincidunt nunc pulvinar sapien et. Vitae proin
              sagittis nisl rhoncus mattis rhoncus urna neque viverra. Egestas sed sed risus pretium
              quam. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Et egestas quis
              ipsum suspendisse. Adipiscing elit ut aliquam purus sit amet luctus venenatis. In
              mollis nunc sed id. Dui id ornare arcu odio. Sed felis eget velit aliquet sagittis id
              consectetur.
            </p>
          </div>
        </div>
      </div>
      <div className={styles["team"]}>
        {data.map((member, index) => (
          <div
            className={styles["member"]}
            key={index}
          >
            <div className={styles["members-picture-container"]}>
              <picture>
                <img
                  srcSet={getImageSrc(member.image)}
                  alt={member.name}
                  loading='lazy'
                  className={styles["members-picture"]}
                />
              </picture>
            </div>
            <h4 className={styles["members-position"]}>{member.position}</h4>
            <h3 className={styles["members-name"]}>{member.name}</h3>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Team;
