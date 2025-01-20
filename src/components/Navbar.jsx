import { useEffect } from "react";
import styles from "../css/navbar.module.css";

export const Navbar = () => {
  useEffect(() => {
    const listener = (e) => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY >= 90) {
        navbar.classList.add(styles.onScroll);
      } else {
        navbar.classList.remove(styles.onScroll);
      }
    };

    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);
  return (
    <div id="navbar" className={styles.container}>
      <div className={styles.logoWrapper}>
        <img src="/logo1.png" alt="logo1" className={styles.logo1} />
        <img src="logo2.png" alt="logo2" className={styles.logo2} />
      </div>
      <div className={styles.linkWrapper}>
        <a href="#services-section">Services</a>
        <a href="#footer">Contact us</a>
      </div>
    </div>
  );
};
