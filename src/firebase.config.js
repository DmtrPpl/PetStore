import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyD3ke8xfZc76GP6xomS0ozmg8jsXFEIevg",
  authDomain: "petstore-a356f.firebaseapp.com",
  projectId: "petstore-a356f",
  storageBucket: "petstore-a356f.appspot.com",
  messagingSenderId: "129074365133",
  appId: "1:129074365133:web:9a8b97dab48b42e44adf84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;