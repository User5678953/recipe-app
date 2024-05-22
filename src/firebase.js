// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import * as firebaseui from 'firebaseui';

const firebaseConfig = {
  apiKey: "AIzaSyCQnrtWvg970JWG3C7A_smDaM5igflYGjE",
  authDomain: "recipeapp-5a271.firebaseapp.com",
  projectId: "recipeapp-5a271",
  storageBucket: "recipeapp-5a271.appspot.com",
  messagingSenderId: "257495899822",
  appId: "1:257495899822:web:ae69f8aebb7f2f2a5f7a6e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

export const ui = new firebaseui.auth.AuthUI(auth);
