// ** Imports **
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

// ** Keys to connect to firebase - Secret :) **
const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_apiKey,
  authDomain: import.meta.env.REACT_APP_authDomain,
  projectId: import.meta.env.REACT_APP_projectId,
  storageBucket: import.meta.env.REACT_APP_storageBucket,
  messagingSenderId: import.meta.env.REACT_APP_messageSenderId,
  appId: import.meta.env.REACT_APP_appId,
  measurementId: import.meta.env.REACT_APP_measurementId,
};

// ** Exporting everything else we might need in the code **
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
