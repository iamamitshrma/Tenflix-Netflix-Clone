import firebase from "firebase/app";
import 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDER,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.MEASUREMENTID
}

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
