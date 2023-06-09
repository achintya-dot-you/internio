import React from "react";

import Popup from "./OpportunitiesPopup";

import styles from "./OpportunitiesContainer.module.scss";

const OpportunitiesContainer = (props) => {
  const popupCloseHandler = () => {
    console.log("Popup has been closed.");
  };

  return (
    <>
      <div className={styles["container"]}>{props.children}</div>
      <Popup closePopup={popupCloseHandler} />
    </>
  );
};

export default OpportunitiesContainer;
