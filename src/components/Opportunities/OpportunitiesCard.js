import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faClock, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import styles from "./OpportunitiesCard.module.scss";

const OpportunitiesCard = (props) => {
  const containerClassName = `${styles.container} ${
    props.animationToggle === 1 ? styles.left : styles.right
  }`;

  return (
    <div className={containerClassName}>
      <div className={styles.top}>
        <h2 className={styles.heading}>{props.heading}</h2>
        <picture className={styles.picture}>
          <img
            srcSet={props.imageURL}
            alt={props.alt}
            loading='lazy'
            className={styles.image}
          />
        </picture>
      </div>
      <div className={styles.bottom}>
        <div className={styles.details}>
          <DetailItem
            icon={faCalendarDays}
            keyText='Term'
            value={props.term}
          />
          <DetailItem
            icon={faClock}
            keyText='Commitment'
            value={props.commitment}
          />
          <DetailItem
            icon={faSackDollar}
            keyText='Stipend'
            value={props.stipend}
          />
        </div>
        <Link
          to={"/opportunity/" + props.url}
          className={styles.button}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

const DetailItem = ({ icon, keyText, value }) => (
  <div className={styles.detail}>
    <FontAwesomeIcon
      icon={icon}
      className={`${styles.icon} ${styles[keyText.toLowerCase()]}`}
    />
    <h4 className={styles["detail-key"]}>{keyText}</h4>
    <h3 className={styles["detail-value"]}>{value}</h3>
  </div>
);

export default OpportunitiesCard;

// In this refactored code:

// Custom variables have been removed.
// The code structure is organized, making it easier to read and maintain.
// The DetailItem component is used to eliminate code duplication for detail items.
// Existing CSS class names are preserved and used as provided in the OpportunitiesCard.module.scss file.
