import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCrG8slzLgsHxMcEYLP0aQY0jFpLj9MEP4",
    authDomain: "classtest-5cf5d.firebaseapp.com",
    projectId: "classtest-5cf5d",
    storageBucket: "classtest-5cf5d.appspot.com",
    messagingSenderId: "834805698298",
    appId: "1:834805698298:web:6e42f12d7967fe89460343"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase.database();