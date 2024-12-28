// constants/firebaseConfig.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAmSds-gRdBuHgVsRBFtmbnkPjJEDKnsuk", // From `API_KEY` in plist
    authDomain: "geowaste-3fda8.firebaseapp.com", // Typically `PROJECT_ID.firebaseapp.com`
    projectId: "geowaste-3fda8", // From `PROJECT_ID` in plist
    storageBucket: "geowaste-3fda8.appspot.com", // From `STORAGE_BUCKET` in plist
    messagingSenderId: "800882856874", // From `GCM_SENDER_ID` in plist
    appId: "1:800882856874:ios:9c2c665032a5a60630d1d3" // From `GOOGLE_APP_ID` in plist
  };
  

const app = initializeApp(firebaseConfig);

export default app;
