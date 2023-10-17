import { useEffect, useState } from "react";

import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase_setup/firebase-config";
import { db } from "../firebase_setup/firebase-config";
import { collection, getDocs } from "firebase/firestore";

import dummy from "../assets/images/opportunities/dummy.jpg";

const useFirebase = (loadingCallback) => {
  const [loading, setLoading] = useState(true);
  const [combinedData, setCombinedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const opportunitiesData = await getDocs(collection(db, "opportunities"));
        const opportunitiesList = opportunitiesData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        const imageRefs = await listAll(ref(storage, "opportunities/"));
        const imageList = await Promise.all(
          imageRefs.items.map(async (item) => getDownloadURL(item))
        );

        const combinedData = opportunitiesList.map((opportunity) => {
          const selectedImage = imageList.find((url) => {
            const imageNameFromURL = url.match(/%2F(.*?)\?/)[1];
            return imageNameFromURL === opportunity.imagename;
          });

          return { ...opportunity, imageURL: selectedImage || dummy };
        });

        setCombinedData(combinedData);
        setLoading(false);

        // Invoke the callback function if provided
        if (loadingCallback) {
          loadingCallback();
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [loadingCallback]);

  return { combinedData, loading };
};

export default useFirebase;
