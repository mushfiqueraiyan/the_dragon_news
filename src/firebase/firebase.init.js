import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOxH1sSk2qE3Qs8YRdFZYAftf7x22HWSM",
  authDomain: "dragon-news-910fe.firebaseapp.com",
  projectId: "dragon-news-910fe",
  storageBucket: "dragon-news-910fe.firebasestorage.app",
  messagingSenderId: "928386785685",
  appId: "1:928386785685:web:18f1aad1e384820789169c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
