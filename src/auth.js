import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut 
} from "firebase/auth";

import { auth } from "./firebase";

// 🔥 Регистрация
export const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// 🔑 Вход
export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// 🚪 Выход
export const logoutUser = () => {
  return signOut(auth);
};