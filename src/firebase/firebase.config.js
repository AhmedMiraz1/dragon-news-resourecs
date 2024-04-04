// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbcWLrYjLUYvas63bp7Jx7K7v4JpGF17Y",
  authDomain: "dragon-news-resourecs.firebaseapp.com",
  projectId: "dragon-news-resourecs",
  storageBucket: "dragon-news-resourecs.appspot.com",
  messagingSenderId: "149958078086",
  appId: "1:149958078086:web:5d0a369a0a693855fd2b07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth
