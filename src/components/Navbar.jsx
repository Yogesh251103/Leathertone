import styles from '../css/navbar.module.css'

export const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logoWrapper}>
            <img src="/logo1.png" alt="logo1" className={styles.logo1}/>
            <img src="logo2.png" alt="logo2" className={styles.logo2}/>
        </div>
        <div className={styles.linkWrapper}>
            <a href="#">Services</a>
            <a href="#">Partners</a>
            <a href="#">Contact us</a>
        </div>
    </div>
  )
}