import Link from 'next/link';
import styles from './page.module.css';

export default function SignupPage() {
    return (
        <div className={styles.signUp}>
            <h1 className={styles.userSignUp}>New User Sign Up</h1>
            <form className={styles.input}>
                <input className={styles.inputField} type="email" id="email" placeholder="Email"></input>
                <button className={styles.signUpButton}>Verify Email</button>
            </form>
            <div>
                <p className={styles.signInLink}>Already have an account? Login <Link href="/home/login" className={styles.here}>HERE</Link></p>
            </div>
        </div>

    )
}