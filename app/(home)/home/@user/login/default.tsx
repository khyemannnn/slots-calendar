import Link from 'next/link';
import styles from './page.module.css';

export default function LoginPageDefault() {
    return (
        <div className={styles.user}>
            <h1 className={styles.userLogin}>User Login</h1>
            <div>
                <form>
                    <div className={styles.input}>
                        <input type="email" id="email" className={styles.inputField} placeholder="Email"></input>
                        <input type="password" id="password" className={styles.inputField}  placeholder="Password"></input>
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