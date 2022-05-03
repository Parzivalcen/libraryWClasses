// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtUtqHqUSOsIqEmoeP5wE2Xavy4fPzHm4",
  authDomain: "library-ce8b3.firebaseapp.com",
  projectId: "library-ce8b3",
  storageBucket: "library-ce8b3.appspot.com",
  messagingSenderId: "113125064764",
  appId: "1:113125064764:web:00c7aa1de3fa6d96650339",
};

// display User
class display {
  userShow(userName) {
    document.querySelector("#log-in").textContent = `Hi ${userName}`;
  }
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
const auth = getAuth();
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// add data

// Pass json local storage to fireStore

// LOG iN
document.querySelector("#log-in").addEventListener("click", (e) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      document.querySelector("#log-in").textContent = `Hi ${user.displayName}`;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
});
