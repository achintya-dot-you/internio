// import React, { useState, useEffect } from "react";
// import { ref, listAll, getDownloadURL } from "firebase/storage";

import styles from "./OpportunitiesCard.module.scss";
// import { storage } from "../../firebase_setup/firebase-config";

const OpportunitiesCard = () => {
  //   const [imageList, setImageList] = useState([]);

  //   useEffect(() => {
  //     listAll(ref(storage, "opportunities/")).then((response) => {
  //       const urls = response.items.map(async (item) => {
  //         const url = await getDownloadURL(item);
  //         return url;
  //       });

  //       Promise.all(urls).then((imageUrls) => {
  //         setImageList(imageUrls);
  //       });
  //     });
  //   }, []);

  return (
    <div className={styles["container"]}>
      {/* {imageList.map((url) => {
        return (
          <img
            src={url}
            alt='ayika'
          />
        );
      })} */}
    </div>
  );
};

export default OpportunitiesCard;
