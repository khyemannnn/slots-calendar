import styles from './page.module.css';

export default function intro() {
    return (
        <div className={styles.intro}>
            <h1 className={styles.welcome}>Welcome to s l o t s .</h1>

            <div className={styles.introText}>
                <p>Effortlessly manage your bookings and let customers</p>
                <p>view your availability with our intuitive </p>
                <p>calendar app designed for small businesses like yours.</p> 
                
            </div>

            <button className={styles.plansButton}>Discover our plans 
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill={"none"}>
          <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        
        </button>
        </div>
    )
}