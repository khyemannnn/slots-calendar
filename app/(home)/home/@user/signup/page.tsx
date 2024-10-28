'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css'; // Import your styles
import Link from 'next/link';
import { SignUp } from '@/utils/auth/create-user';


export default function SignupPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const router = useRouter();
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const user = await SignUp(email, password);
            setSuccessMessage("Sign-up successful! Please verify your email.")
            setErrorMessage(null);
            console.log("Signed up user:", user);
            setTimeout(() => {
                router.push('/home');
            }, 3000);

        } catch (error) {
            setErrorMessage(error.message);
            setSuccessMessage(null);
            console.error("Error during sign-up:", error.message);
        }
    };

    return (
        <div className={styles.signUp}>
            <h1 className={styles.userSignUp}>Create an Account</h1>
            <form className={styles.input} onSubmit={handleSubmit}>
                <input
                    className={styles.inputField}
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className={styles.inputField}
                    type="password"
                    value={password}
                    placeholder="Create Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    className={styles.inputField}
                    type="password"
                    value={confirmPassword}
                    placeholder="Confirm Your Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button className={styles.signUpButton} type="submit">Sign Up</button>
            </form>

            <div>
                <p className={styles.signInLink}>
                    Already have an account? Login <Link href="/home/login" className={styles.here}>HERE</Link>
                </p>
            </div>
            
            {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
            {successMessage && <div className={styles.alertMessage}>{successMessage}</div>}
        </div>
    );
}
