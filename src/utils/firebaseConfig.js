import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDtBGY3rAXmI26cvv2UhEcgEoATlj1hxO8",
    authDomain: "sell-harvest.firebaseapp.com",
    projectId: "sell-harvest",
    storageBucket: "sell-harvest.appspot.com",
    messagingSenderId: "815309864182",
    appId: "1:815309864182:web:a058b6f323b0eeb7b140d7"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

export default firebase;
