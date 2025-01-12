import styles from '../css/hero.module.css'

export const Hero = () => {
  return (
    <div className={styles.parent}>
        <h1 className={styles.heading}>The Finest Leather</h1>
        <p className={styles.sub}>Crafting quality leather that stands the test of time.</p>
        <button className={styles.btn}>Discover</button>
    </div>
  )
}
