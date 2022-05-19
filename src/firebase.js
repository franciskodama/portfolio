import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCvB53uXEbBIeTmWZAk91uW6O5QonXxFeg",
  authDomain: "fk-portfolio-contact-form.firebaseapp.com",
  projectId: "fk-portfolio-contact-form",
  storageBucket: "fk-portfolio-contact-form.appspot.com",
  messagingSenderId: "327990032431",
  appId: "1:327990032431:web:23cca48d565607cfdf6eda",
  measurementId: "G-WYJ72LXKLK",
});

const db = firebaseApp.firestore();

export { db };
