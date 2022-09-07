import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD8V0A9kM-DmYr6LGXHjzlkDE4aYhfGY6Q",
    authDomain: "insta-2-yt-4c563.firebaseapp.com",
    projectId: "insta-2-yt-4c563",
    storageBucket: "insta-2-yt-4c563.appspot.com",
    messagingSenderId: "1016988730195",
    appId: "1:1016988730195:web:6674721b6211b6aef057a6",
    measurementId: "G-BY5JBPGX5G"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };