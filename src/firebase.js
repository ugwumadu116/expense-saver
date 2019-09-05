import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBxuWj5DytA8MhD8L4QW5b2hwh6SRONLb4",
  authDomain: "todo-19b41.firebaseapp.com",
  databaseURL: "https://todo-19b41.firebaseio.com",
  projectId: "todo-19b41",
  storageBucket: "todo-19b41.appspot.com",
  messagingSenderId: "561548808327",
  appId: "1:561548808327:web:6f9182db46916d91736822"
});

export { firebaseConfig as firebase };
