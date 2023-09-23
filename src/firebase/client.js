import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA8m_US3gfuCpqbyWCm2rWbzbEi1x0nuqM",
  authDomain: "tomaspereiro-thebeach.firebaseapp.com",
  projectId: "tomaspereiro-thebeach",
  storageBucket: "tomaspereiro-thebeach.appspot.com",
  messagingSenderId: "1005771432372",
  appId: "1:1005771432372:web:3b80d95daa3daa195552e1"
};


const app = initializeApp(firebaseConfig)
export const db = getFirestore(app);