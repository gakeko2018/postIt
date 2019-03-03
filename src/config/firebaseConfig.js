import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA49HpvhTihHdQEuGNhY6m677rhqKoxlro",
    authDomain: "post-it-d0219.firebaseapp.com",
    databaseURL: "https://post-it-d0219.firebaseio.com",
    projectId: "post-it-d0219",
    storageBucket: "post-it-d0219.appspot.com",
    messagingSenderId: "654612844908"
  };
  firebase.initializeApp(config);
 /*   firebase.firestore().settings({
      timestampsInSnapshots:true
  }); */ 


  export default firebase;