import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_gVoWmHciC4UFq7ZD9nSjAafDseknfJY",
  authDomain: "gteam-5b597.firebaseapp.com",
  projectId: "gteam-5b597",
  storageBucket: "gteam-5b597.firebasestorage.app",
  messagingSenderId: "205600259473",
  appId: "1:205600259473:web:ccbee5bc70922c2d61ae30",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;