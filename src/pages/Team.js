import React from "react";

import styles from "./Team.module.scss";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import dummyPic from "../assets/images/team/dummy1.jpg";

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
        <div className={styles["member"]}>
          <div className={styles["members-picture-container"]}>
            <picture>
              <img
                srcSet={dummyPic}
                alt='dummy'
                loading='lazy'
                className={styles["members-picture"]}
              />
            </picture>
          </div>
          <h4 className={styles["members-position"]}>Director of Outreach</h4>
          <h3 className={styles["members-name"]}>Eva Swanson</h3>
        </div>
        <div className={styles["member"]}>
          <div className={styles["members-picture-container"]}>
            <picture>
              <img
                srcSet={dummyPic}
                alt='dummy'
                loading='lazy'
                className={styles["members-picture"]}
              />
            </picture>
          </div>
          <h4 className={styles["members-position"]}>Director of Design</h4>
          <h3 className={styles["members-name"]}>Siddhant Mathur</h3>
        </div>
        <div className={styles["member"]}>
          <div className={styles["members-picture-container"]}>
            <picture>
              <img
                srcSet={dummyPic}
                alt='dummy'
                loading='lazy'
                className={styles["members-picture"]}
              />
            </picture>
          </div>
          <h4 className={styles["members-position"]}>Director of Technology</h4>
          <h3 className={styles["members-name"]}>Manish Chaurasiya</h3>
        </div>
        <div className={styles["member"]}>
          <div className={styles["members-picture-container"]}>
            <picture>
              <img
                srcSet={dummyPic}
                alt='dummy'
                loading='lazy'
                className={styles["members-picture"]}
              />
            </picture>
          </div>
          <h4 className={styles["members-position"]}>Outreach Specialist</h4>
          <h3 className={styles["members-name"]}>Aarav</h3>
        </div>
        <div className={styles["member"]}>
          <div className={styles["members-picture-container"]}>
            <picture>
              <img
                srcSet={dummyPic}
                alt='dummy'
                loading='lazy'
                className={styles["members-picture"]}
              />
            </picture>
          </div>
          <h4 className={styles["members-position"]}>Social Media Manager</h4>
          <h3 className={styles["members-name"]}>Nidhi Hegde</h3>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
