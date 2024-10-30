import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwJ336uY3YSUo6WNXlNqBFmBuhe0gW01c",
  authDomain: "potfolio-contactus-form.firebaseapp.com",
  projectId: "potfolio-contactus-form",
  storageBucket: "potfolio-contactus-form.appspot.com",
  messagingSenderId: "827793001076",
  appId: "1:827793001076:web:c2342e5280eb2b13b45f21",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
