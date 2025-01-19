import React from "react";
import styles from "../css/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.parent} id='footer'>
      <div className={styles.leftContainer}>
        <div className={styles.logoWrapper}>
          <img src="/logo1.png" alt="logo1" className={styles.logo1} />
          <img src="logo2.png" alt="logo2" className={styles.logo2} />
        </div>
        <p>131, Grand Southern Trunk Road,</p>
        <p>Chromepet, Tamil Nadu, Chennai - 600 044</p>
        <p>E-mail : <a href="mailto:" style={{color:'black'}}>admin@leathertone.in</a></p>
        <p>Phone : <a href="tel:+91 8668182479" style={{color:'black'}}>+91 8668182479</a></p>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2425915908293!2d80.14095937481942!3d12.956322715213513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f702d119595%3A0xaf05935fa2a726fa!2sLEATHERTONE!5e0!3m2!1sen!2sin!4v1737283339346!5m2!1sen!2sin" width="500" height="350" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
    </div>
  );
};

export default Footer;
