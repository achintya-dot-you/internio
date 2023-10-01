import React, { useState, useEffect } from "react";

import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase_setup/firebase-config";
import { db } from "../../firebase_setup/firebase-config";
import { collection, getDocs } from "firebase/firestore";

import styles from "./OpportunitiesList.module.scss";

import OpportunitiesCard from "./OpportunitiesCard";
import dummy from "../../assets/images/opportunities/dummy.jpg";

const OpportunitiesList = (props) => {
  const [imageList, setImageList] = useState([]);
  const [opportunitiesList, setOpportunitiesList] = useState([]);
  const [combinedData, setCombinedData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOpportunitiesAndImages = async () => {
      // Fetch opportunities data only once
      const opportunitiesData = await getDocs(collection(db, "opportunities"));
      setOpportunitiesList(opportunitiesData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      // Fetch image URLs only once
      const imageRefs = await listAll(ref(storage, "opportunities/"));
      const urls = await Promise.all(imageRefs.items.map(async (item) => getDownloadURL(item)));
      setImageList(urls);
    };

    fetchOpportunitiesAndImages();
  }, []); // Empty dependency array to ensure it runs only once

  useEffect(() => {
    // Combine opportunities and image data
    if (imageList.length > 0 && opportunitiesList.length > 0) {
      const combinedData = opportunitiesList.map((opportunity) => {
        const selectedImage = imageList.find((url) => {
          const imageNameFromURL = url.match(/%2F(.*?)\?/)[1];
          return imageNameFromURL === opportunity.imagename;
        });

        return { ...opportunity, imageURL: selectedImage || dummy };
      });

      setCombinedData(combinedData);
      setLoading(false);
    }
  }, [imageList, opportunitiesList]);

  useEffect(() => {
    if (loading !== true) {
      props.loader();
    }
  }, [loading, props]);

  return (
    <div className={styles.container}>
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
  );
};

export default OpportunitiesList;
