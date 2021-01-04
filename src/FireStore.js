import firebase from 'firebase'
import 'firebase/firebase-database'

/*var firebaseConfig = {
    apiKey: "AIzaSyAcPcId7GiMModsYAkXVR5mUbHkrxyjfOc",
    authDomain: "comteur-project.firebaseapp.com",
    databaseURL: "https://comteur-project.firebaseio.com",
    projectId: "comteur-project",
    storageBucket: "comteur-project.appspot.com",
    messagingSenderId: "443537631977",
    appId: "1:443537631977:web:5c71f888f1298e7f3ede78",
    measurementId: "G-KTZQX2DL00"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);*/

  var firebaseConfig = {
    apiKey: "AIzaSyAICebwY25NloL5d9aXfHZ5PkO8xsjbaVQ",
    authDomain: "connectedobjects-9a864.firebaseapp.com",
    projectId: "connectedobjects-9a864",
    storageBucket: "connectedobjects-9a864.appspot.com",
    messagingSenderId: "242966892005",
    appId: "1:242966892005:web:28fb60e5ac967f5fcab30c",
    measurementId: "G-SBLHSCR75C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase