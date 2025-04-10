import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth();

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
    } catch (error) {
        alert("Login failed: " + error.message);
    }
};

const logout = async () => {
    await signOut(auth);
    alert("Logged out!");
};