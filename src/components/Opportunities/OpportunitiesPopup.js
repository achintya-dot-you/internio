import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import styles from "./OpportunitiesPopup.module.scss";

const OpportunitiesPopup = (props) => {
  return (
    <>
      <div
        className={styles["popup-container"]}
        onClick={props.closePopup}
      ></div>
      <div className={styles["popup"]}>
        <FontAwesomeIcon
          icon={faX}
          size='2x'
          className={styles["closer"]}
          onClick={props.closePopup}
        />
      </div>
    </>
  );
};

export default OpportunitiesPopup;
