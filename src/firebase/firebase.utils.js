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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log("error creating user", err);
    }
  }

  return userRef;
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ propmt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
