import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../constants/firebaseConfig"; // Ensure this points to your Firebase config

const auth = getAuth(app);

export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User registered:", userCredential.user);
    return userCredential.user; // Return the registered user if needed
  } catch (error) {
    console.error("Registration error:", error.message);
    throw error; // Re-throw error for further handling
  }
};
