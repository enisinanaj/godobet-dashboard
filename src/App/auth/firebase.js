import firebase from 'firebase/app';
import "firebase/auth"
import "firebase/storage"

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA6XV98iO8tEVv3mUgxwYj7b1uSj0xeOB4",
    authDomain: "godobet-ac5f4.firebaseapp.com",
    databaseURL: "https://godobet-ac5f4.firebaseio.com",
    projectId: "godobet-ac5f4",
    storageBucket: "godobet-ac5f4.appspot.com",
    messagingSenderId: "544349522367",
    appId: "1:544349522367:web:4cff500b98477a7527790a"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const storage = firebase.storage();