import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDKijpsdWBJBQnS56Xd5YA9tGa3bkUz80M",
  authDomain: "curso-cf5b0.firebaseapp.com",
  projectId: "curso-cf5b0",
  storageBucket: "curso-cf5b0.appspot.com",
  messagingSenderId: "799194619893",
  appId: "1:799194619893:web:c5abacdbe0e6fe623d8abc",
  measurementId: "G-F90Q1LYWM9"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)

export { db, auth };