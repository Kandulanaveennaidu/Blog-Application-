import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5BZbx8RXWlKMkPf7simOQ1Zl_48wzVMM",
  authDomain: "tinder-clone-b1914.firebaseapp.com",
  databaseURL: "https://tinder-clone-b1914-default-rtdb.firebaseio.com",
  projectId: "tinder-clone-b1914",
  storageBucket: "tinder-clone-b1914.appspot.com",
  messagingSenderId: "394728477825",
  appId: "1:394728477825:web:6dcad630a0fecd1bf12980"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
