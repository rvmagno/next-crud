 
// apiKey: "AIzaSyA6wDz76hhWJoouNTg2D-84I5n2J3fjBLk",
// authDomain: "next-crud-a134f.firebaseapp.com",
// projectId: "next-crud-a134f"

import firebase from 'firebase/compat/app';
import  'firebase/compat/firestore';


if(!firebase.apps.length){
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
    })
}


export default firebase