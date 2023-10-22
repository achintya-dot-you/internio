import React from "react";

import styles from "./Mission.module.scss";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Mission = () => {
  return (
    <>
      <Navbar />
      <div className={styles["mission-container"]}>
        <h2 className={styles["mission-heading"]}>Our Mission</h2>
        <p className={styles["mission-text"]}>
          At internio, our mission is to empower future leaders by providing motivated and driven
          high school students with quality internship opportunities. We believe in a future where
          high school students can seamlessly access internships, enabling them to put their skills
          into practice and gain invaluable work experience. Our goal is to remove the barriers that
          often hinder students from pursuing internships, ensuring that every young individual has
          the chance to excel academically and professionally. We aim to equip the next generation
          with the confidence, knowledge, and real-world skills they need to thrive in college and
          beyond. Together, we're building a brighter future, one internship at a time.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Mission;
