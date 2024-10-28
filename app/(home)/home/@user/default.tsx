import Link from 'next/link';
import styles from './page.module.css';

export default function UserPageDefault() {
    return (
        <div className={styles.authPrompt}>
            {/* <p className={styles.loginText}>New here?</p> */}
            <Link href="/home/signup">
            <button className={styles.signUpButton}>Create an Account</button>
            </Link>
            <div className={styles.divider}></div> 
            <p className={styles.loginText}>Already have an account?</p> 
            <Link href="/home/login">
            <button className={styles.loginButton}>Login</button>
            </Link>
        </div>
    );
    
}