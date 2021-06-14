import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCQuUWiYyP6nqLS65C4Q8piKiUWp3kbay4",
  authDomain: "disneyclone-ccbe6.firebaseapp.com",
  projectId: "disneyclone-ccbe6",
  storageBucket: "disneyclone-ccbe6.appspot.com",
  messagingSenderId: "777330479599",
  appId: "1:777330479599:web:df33094796afeeefab661a",
  measurementId: "G-T1Q07CL0YQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
