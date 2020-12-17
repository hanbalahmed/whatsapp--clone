import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD9PtP_YalbRAzEXjyq9xD_iR3ZF2vfkzg",
  authDomain: "clone-hanbal.firebaseapp.com",
  projectId: "clone-hanbal",
  storageBucket: "clone-hanbal.appspot.com",
  messagingSenderId: "930461752324",
  appId: "1:930461752324:web:079ba6a9f8b0dc79176951",
  measurementId: "G-3Q31RJP97K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
