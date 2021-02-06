import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const Config = {
  apiKey: "AIzaSyBUzCyG1C8rpqAc93a0DU0EAIP6p6ad1zM",
  authDomain: "netflix-d03c4.firebaseapp.com",
  databaseURL: "https://netflix-d03c4-default-rtdb.firebaseio.com",
  projectId: "netflix-d03c4",
  storageBucket: "netflix-d03c4.appspot.com",
  messagingSenderId: "47058109945",
  appId: "1:47058109945:web:596ea40ba5cf09c494a928",
  measurementId: "G-4Z8Y12VK2Z",
};

export const CreateUserProfileDocument = async (userAuth, additionalData) => {
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
        ...additionalData,
      });
    } catch (error) {
      console.log(`${error} User Can't be registered`);
    }
  }
  return userRef;
};

firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
