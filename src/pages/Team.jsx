import React from "react";

import styles from "./Team.module.scss";

import data from "../data/Team.json";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import arnav from "../assets/images/team/arnav.jpg";
import achintya from "../assets/images/team/achintya.jpg";

// const getImageSrc = (imagesrc) => {
//   try {
//     const image = require(`../assets/images/team/${imagesrc}.jpg`);
//     return image.default;
//   } catch (error) {
//     console.log(`Error loading image at path: ${imagesrc}`);
//     console.error(error);
//     return null;
//   }
// };

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
                src={achintya}
                alt='achintya'
                loading='lazy'
                className={styles["founders-picture"] + " " + styles["arnav-pic"]}
              />
            </picture>
          </div>
          <div className={styles["founders-content"]}>
            <h3 className={styles["founders-position"]}>Co-Founder</h3>
            <h2 className={styles["founders-name"]}>Achintya Pasricha</h2>
            <p className={styles["founders-desc"]}>
              Dedicated, innovative, and driven, Achintya is an individual passionate about
              technology, environment, and sustainability. He is resilient and tackles every problem
              head-on. He loves talking to new people and forming connections. He is committed to
              creating a platform to help future leaders and aims to bring a difference through
              internio.
            </p>
          </div>
        </div>
        <div className={styles["founders-frame"]}>
          <div className={styles["founders-picture-container"]}>
            <picture>
              <img
                src={arnav}
                alt='arnav'
                loading='lazy'
                className={styles["founders-picture"]}
              />
            </picture>
          </div>
          <div className={styles["founders-content"]}>
            <h3 className={styles["founders-position"]}>Co-Founder</h3>
            <h2 className={styles["founders-name"]}>Arnav Bhola</h2>
            <p className={styles["founders-desc"]}>
              Arnav is passionate about all things tech: whether it is coding websites or developing
              bots. He is innovative and has participated in and won various hackathons. He thrives
              on intellectual challenges! He is charismatic, determined, resourceful, and a person
              you can always rely on. His unwavering dedication is evident through his mission to
              build a platform to empower future leaders.
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
                  src={"team/" + member.image + ".jpg"}
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
