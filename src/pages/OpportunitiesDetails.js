import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useFirebase from "../hooks/useFirebase";

import styles from "./OpportunitiesDetails.module.scss";

import OpportunitiesForm from "../components/Opportunities/OpportunitiesForm";

import iconImage from "../assets/images/icon.png";

const OpportunitiesDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { combinedData } = useFirebase();

  const selectedItem = useMemo(() => {
    if (id && combinedData.length > 0) {
      setLoading(false);
      return combinedData.find((item) => item.name === id);
    }
    return null;
  }, [id, combinedData]);

  useEffect(() => {
    if (selectedItem) {
      document.title = `Opportunity | ${selectedItem.position}`;
    } else {
      document.title = "internio | Loading";
    }
  }, [selectedItem]);

  useEffect(() => {
    if (loading === false && !selectedItem) {
      navigate("/404"); // Redirect to the 404 page or any other URL
    }
  }, [loading, navigate, selectedItem]);

  return (
    <>
      {loading && (
        <div className={styles["loader-container"]}>
          <picture>
            <img
              srcSet={iconImage}
              alt=''
              loading='lazy'
              className={styles["loader"]}
            ></img>
          </picture>
        </div>
      )}
      {selectedItem && !loading && (
        <>
          <div className={styles["container"]}>
            <div className={styles["right"]}><OpportunitiesForm
                company={selectedItem.company}
                position={selectedItem.position}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default OpportunitiesDetails;
