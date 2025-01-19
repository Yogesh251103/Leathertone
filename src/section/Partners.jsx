import styles from "../css/service.module.css";

export const Partners = () => {
  return (
    <div className={styles.parent} id="partners-section">
      <div className={styles.leftContainer}>
        <h1 className={styles.title}>Our Partners</h1>
        <p className={styles.sub}>
          We are grateful to our esteemed partners who make this business
          comprehensive and successful.
        </p>
        <button className={styles.btn}>Partner with us</button>
      </div>
    </div>
  );
};
