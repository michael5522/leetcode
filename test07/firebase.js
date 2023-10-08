
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAMlNgdypcTdho_3XTJp8ny9JwpI_ETcrc",
  authDomain: "react-notes-c10de.firebaseapp.com",
  projectId: "react-notes-c10de",
  storageBucket: "react-notes-c10de.appspot.com",
  messagingSenderId: "395633894821",
  appId: "1:395633894821:web:9c53ba793facf81cabf44c"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
