import React from "react";

import OpportunitiesCard from "./OpportunitiesCard";

import styles from "./OpportunitiesHeader.module.scss";

const OpportunitiesHeader = () => {
  return (
    <div className={styles["header"]}>
      <OpportunitiesCard></OpportunitiesCard>
    </div>
  );
};

export default OpportunitiesHeader;
