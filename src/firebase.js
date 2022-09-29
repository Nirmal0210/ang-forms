import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrN190LLWjCW-tsBuM95KOiA1hN9qHNU0",
  authDomain: "ang-forms.firebaseapp.com",
  projectId: "ang-forms",
  storageBucket: "ang-forms.appspot.com",
  messagingSenderId: "666000112161",
  appId: "1:666000112161:web:36a482e2102eac49d20160",
};

let app = initializeApp(firebaseConfig);
let auth = getAuth(app);
let db = getFirestore(app);
export { auth, db };

// const sendPasswordReset = async (email) => {
//   try {
//     await sendPasswordResetEmail(auth, email);
//     alert("Password reset link sent!");
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

// const logout = () => {
//   signOut(auth);
// };
