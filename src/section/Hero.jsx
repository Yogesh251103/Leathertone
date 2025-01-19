import styles from '../css/hero.module.css'

const Hero = () => {
  const handleClick = () => {
    document.getElementById("services-section").scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className={styles.parent}>
        <h1 className={styles.heading}>The Finest Leather</h1>
        <p className={styles.sub}>Crafting quality leather that stands the test of time.</p>
        <button className={styles.btn} onClick={handleClick}>Discover</button>
    </div>
  )
}

export default Hero
