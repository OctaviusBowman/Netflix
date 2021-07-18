import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Seed the database

// Config here
const config = {
    apiKey: "AIzaSyBwXkj6ORS0U_JJXiI7iGtkcRPWz8eHfxk",
    authDomain: "netflix-79046.firebaseapp.com",
    projectId: "netflix-79046",
    storageBucket: "netflix-79046.appspot.com",
    messagingSenderId: "342609574072",
    appId: "1:342609574072:web:5f220148b8365d250e5c4d"
};

const firebase = Firebase.initializeApp(config);


export { firebase };