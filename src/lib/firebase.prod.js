import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// seed the databases

// config
const config = {
  apiKey: "AIzaSyBUzCyG1C8rpqAc93a0DU0EAIP6p6ad1zM",
  authDomain: "netflix-d03c4.firebaseapp.com",
  databaseURL: "",
  projectId: "netflix-d03c4",
  storageBucket: "netflix-d03c4.appspot.com",
  messagingSenderId: "47058109945",
  appId: "1:47058109945:web:596ea40ba5cf09c494a928",
  measurementId: "G-4Z8Y12VK2Z",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
