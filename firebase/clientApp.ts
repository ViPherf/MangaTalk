import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABY5XMXS2iLBhpUK_lQDX5xlXiPUCTnFU",
  authDomain: "mangatalk-421be.firebaseapp.com",
  projectId: "mangatalk-421be",
  storageBucket: "mangatalk-421be.appspot.com",
  messagingSenderId: "502164977871",
  appId: "1:502164977871:web:ec9de61f2bd9e44bb21fba"
};

/**
 * Initialize Firebase (Changes made as Next.JS uses server side rendering). 
 * If the app is already initialized, then use the existing app.
 * If the app is not initialized, then initialize the app.
 * This way, when the app is already initialized in the server, it is not re-initialized in the client.
 */
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { firestore, auth, storage };