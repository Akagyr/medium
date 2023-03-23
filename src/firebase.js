import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcay9nuCr19PriI9lhShZZ-qdHkp3eX10",
  authDomain: "medium-36b03.firebaseapp.com",
  projectId: "medium-36b03",
  storageBucket: "medium-36b03.appspot.com",
  messagingSenderId: "852119782906",
  appId: "1:852119782906:web:a83580d6c8a3521c661043",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);