// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseui from 'firebaseui';

const firebaseConfig = {
  apiKey: "AIzaSyCQnrtWvg970JWG3C7A_smDaM5igflYGjE",
  authDomain: "recipeapp-5a271.firebaseapp.com",
  projectId: "recipeapp-5a271",
  storageBucket: "recipeapp-5a271.appspot.com",
  messagingSenderId: "257495899822",
  appId: "1:257495899822:web:ae69f8aebb7f2f2a5f7a6e"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const ui = new firebaseui.auth.AuthUI(auth);
