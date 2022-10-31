import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

 const firebaseConfig = {
   apiKey: "AIzaSyCwfuAa_sxCTvP4NMI1TNf1ckK3jN_Lri0",
   authDomain: "angforms-dev.firebaseapp.com",
   projectId: "angforms-dev",
   storageBucket: "angforms-dev.appspot.com",
   messagingSenderId: "760406068573",
   appId: "1:760406068573:web:950171de4950d88e55acb4",
   measurementId: "G-PL41GEV6FE"
 };

let app = initializeApp(firebaseConfig);
let auth = getAuth(app);
let db = getFirestore(app);
export { auth, db };
