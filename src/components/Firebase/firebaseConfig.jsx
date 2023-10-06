import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
//login
const firebaseConfig = {
    apiKey: "AIzaSyB_RIqdTIvtZtKGvLectQI3nSIl2dCSmq0",
    authDomain: "loginjson-63798.firebaseapp.com",
    databaseURL: "https://loginjson-63798-default-rtdb.firebaseio.com",
    projectId: "loginjson-63798",
    storageBucket: "loginjson-63798.appspot.com",
    messagingSenderId: "493113358644",
    appId: "1:493113358644:web:d4599c2feb9eb1157fcd61"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);