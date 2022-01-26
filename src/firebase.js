import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAkA4xps9R63X9cM-__Lja6ZK9Bz92iOFc",
  authDomain: "disneyplus-appclone.firebaseapp.com",
  projectId: "disneyplus-appclone",
  storageBucket: "disneyplus-appclone.appspot.com",
  messagingSenderId: "1066756023070",
  appId: "1:1066756023070:web:a73c328a1f8bbd24669f0f",
  measurementId: "G-W5X1S28SNX"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;