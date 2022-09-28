// francishkodama -------------- adapted way (with the youtube video)

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';

// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyABF0hv-AXHRMpwGFvcExzeJPad332qpr0",
//   authDomain: "fk-portfolio-third-db.firebaseapp.com",
//   projectId: "fk-portfolio-third-db",
//   storageBucket: "fk-portfolio-third-db.appspot.com",
//   messagingSenderId: "433101682998",
//   appId: "1:433101682998:web:aecbf0c40a6c6b54689b97"
// 

// const db = firebaseApp.firestore();

// export { db };

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRESTORE_API_KEY,
  authDomain: process.env.REACT_APP_FIRESTORE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIRESTORE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIRESTORE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIRESTORE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIRESTORE_APP_ID,
  measurementId: process.env.REACT_APP_FIRESTORE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Populates db with all Firestore information from app
export const db = getFirestore(app)
//export { db };
 


// francishkodama -------------- right way

// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyABF0hv-AXHRMpwGFvcExzeJPad332qpr0",
//   authDomain: "fk-portfolio-third-db.firebaseapp.com",
//   projectId: "fk-portfolio-third-db",
//   storageBucket: "fk-portfolio-third-db.appspot.com",
//   messagingSenderId: "433101682998",
//   appId: "1:433101682998:web:aecbf0c40a6c6b54689b97"
// };

// const db = initializeApp(firebaseConfig);

// export { db };




// server.kodama --------------

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';

// const firebaseApp = firebase.initializeApp({
//   apiKey: 'AIzaSyAMMpSItyeMoa7V8_zoQl_Lsy0YnSdL0uI',
//   authDomain: 'fk-portfolio-server.firebaseapp.com',
//   projectId: 'fk-portfolio-server',
//   storageBucket: 'fk-portfolio-server.appspot.com',
//   messagingSenderId: '495460237233',
//   appId: '1:495460237233:web:4852bacf145804480b8790',
// });

// const db = firebaseApp.firestore();

// export { db };



// fhkodama --------------

// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyCvB53uXEbBIeTmWZAk91uW6O5QonXxFeg",
//   authDomain: "fk-portfolio-contact-form.firebaseapp.com",
//   projectId: "fk-portfolio-contact-form",
//   storageBucket: "fk-portfolio-contact-form.appspot.com",
//   messagingSenderId: "327990032431",
//   appId: "1:327990032431:web:23cca48d565607cfdf6eda",
//   measurementId: "G-WYJ72LXKLK",
// });
