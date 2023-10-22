import React from "react";

import styles from "./Mission.module.scss";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import rawText from "../data/Mission.txt";

let text = "";
fetch(rawText)
  .then((r) => r.text())
  .then((t) => {
    text = t;
  });

const Mission = () => {
  return (
    <>
      <Navbar />
      <div className={styles["mission-container"]}>
        <h2 className={styles["mission-heading"]}>Our Mission</h2>
        <p className={styles["mission-text"]}>{text}</p>
      </div>
      <Footer />
    </>
  );
};

export default Mission;
