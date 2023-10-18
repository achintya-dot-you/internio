import React, { forwardRef } from "react";

import useFirebase from "../../hooks/useFirebase";

import styles from "./OpportunitiesList.module.scss";

import OpportunitiesCard from "./OpportunitiesCard";

const OpportunitiesList = (props, opportunitiesRef) => {
  const { combinedData, loading } = useFirebase(props.loader);

  return (
    <>
      {!loading && (
        <div
          className={styles.container}
          ref={opportunitiesRef}
        >
          {combinedData.map((opportunity, index) => {
            const animationToggle = index % 2 === 0 ? 1 : 2;
            return (
              <OpportunitiesCard
                key={opportunity.name}
                imageURL={opportunity.imageURL}
                alt={opportunity.name}
                heading={opportunity.position}
                term={opportunity.term}
                commitment={opportunity.commitment}
                stipend={opportunity.stipend}
                url={opportunity.name}
                animationToggle={animationToggle}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default forwardRef(OpportunitiesList);
