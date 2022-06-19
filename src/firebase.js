import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAMMpSItyeMoa7V8_zoQl_Lsy0YnSdL0uI',
  authDomain: 'fk-portfolio-server.firebaseapp.com',
  projectId: 'fk-portfolio-server',
  storageBucket: 'fk-portfolio-server.appspot.com',
  messagingSenderId: '495460237233',
  appId: '1:495460237233:web:4852bacf145804480b8790',
});

const db = firebaseApp.firestore();

export { db };

// fhkodama

// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyCvB53uXEbBIeTmWZAk91uW6O5QonXxFeg",
//   authDomain: "fk-portfolio-contact-form.firebaseapp.com",
//   projectId: "fk-portfolio-contact-form",
//   storageBucket: "fk-portfolio-contact-form.appspot.com",
//   messagingSenderId: "327990032431",
//   appId: "1:327990032431:web:23cca48d565607cfdf6eda",
//   measurementId: "G-WYJ72LXKLK",
// });
