import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCd1ABoTrP01J6GOPnjpwoXkoJCGNLzPJ8",
    authDomain: "instagram-9c6de.firebaseapp.com",
    projectId: "instagram-9c6de",
    storageBucket: "instagram-9c6de.appspot.com",
    messagingSenderId: "1059219499784",
    appId: "1:1059219499784:web:01d4b3a899f65ac9b05abd"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;


export { firebase, FieldValue};