import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB4Ezf9-hbMbFfSMCj9FIWg638sGSOiOlw",
  authDomain: "book-recommender-app.firebaseapp.com",
  databaseURL: "https://book-recommender-app.firebaseio.com",
  projectId: "book-recommender-app",
  storageBucket: "book-recommender-app.appspot.com",
  messagingSenderId: "965520326887",
  appId: "1:965520326887:web:fb8ff5471c775be8a32242",
  measurementId: "G-V5PEJPJ2VS"
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
