import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyANT3gE9H9Na5F3WOI_BPzwujN70ZFPhjo",
  authDomain: "ask-gju-ekta.firebaseapp.com",
  projectId: "ask-gju-ekta",
  storageBucket: "ask-gju-ekta.appspot.com",
  messagingSenderId: "717853448045",
  appId: "1:717853448045:web:9ac5154f60500ab9a2ac64",
  /*measurementId: "G-LJBYVXT22Z",*/
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
