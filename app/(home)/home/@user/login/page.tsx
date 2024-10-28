
'use client';
import Link from 'next/link';
import styles from './page.module.css';
import { useState } from 'react';

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // To store error message

    const handleSubmit = async (event) => {
        event.preventDefault();
        
    
    };


    return (
        <div className={styles.user}>
            <h1 className={styles.userLogin}>User Login</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.input}>
                        <input type="email" value={email} className={styles.inputField} placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                        <input type="password" value={password} className={styles.inputField}  placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <p className={styles.fpassword}>Forgot Password?</p>
                    <button className={styles.loginButton}>Login</button>
                </form>
                <div>
                    <p className={styles.signuplink}>Don't have an account? Sign up <Link href="/home/signup" className={styles.here}>HERE</Link></p>
                </div>
            </div>
        </div>
    )
}