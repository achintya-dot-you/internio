import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";

import styles from "./NotFound.module.scss";

const NotFound = () => {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    // Extract the path (what's after the last slash) from the URL
    const path = window.location.pathname;
    setCurrentPath(path);
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles["container"]}>
        <h1 className={styles["heading"]}>Page Not Found</h1>
        {currentPath === "/404" ? (
          <p className={styles["paragraph"]}>
            The page <span className={styles["path"]}>you're looking for</span> doesn't exist!
          </p>
        ) : (
          <p className={styles["paragraph"]}>
            The page <span className={styles["path"]}>{currentPath}</span> doesn't exist!
          </p>
        )}
        <Link
          to={"/"}
          className={styles["button"]}
        >
          Back To Homepage
        </Link>
      </div>
    </>
  );
};

export default NotFound;
