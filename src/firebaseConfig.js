// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyDVZ4--gwHzZFJQgCcfDIw04zQZjUm1t50",
  authDomain: "authentication-50dee.firebaseapp.com",
  projectId: "authentication-50dee",
  storageBucket: "authentication-50dee.appspot.com",
  messagingSenderId: "969924188673",
  appId: "1:969924188673:web:cbdf52df151d576f9a3e00"
};

const app = firebase.initializeApp(firebaseConfig);

export default app;