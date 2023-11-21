// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_Ed0qQ45YH1lYbe2CO2n11nrDpFUl9bk",
  authDomain: "medium-clone-7e055.firebaseapp.com",
  projectId: "medium-clone-7e055",
  storageBucket: "medium-clone-7e055.appspot.com",
  messagingSenderId: "172737829973",
  appId: "1:172737829973:web:7dfbea51eadfee828bc8dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db}