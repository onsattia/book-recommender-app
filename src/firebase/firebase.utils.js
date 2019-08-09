import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyDbuhEEysWd5qlLIGB9vJjZ0OVEKqK2vQg",
  authDomain: "crossfit-box.firebaseapp.com",
  databaseURL: "https://crossfit-box.firebaseio.com",
  projectId: "crossfit-box",
  storageBucket: "crossfit-box.appspot.com",
  messagingSenderId: "608215340854",
  appId: "1:608215340854:web:3559f9555d27ef6b"
};
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ propmt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
