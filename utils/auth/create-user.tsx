import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/utils/auth/firebaseConfig';

export const SignUp = async (email: string, password: string) => {
    
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential;
    } catch (error) {
        throw new Error(error.message);
    }
}