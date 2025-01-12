import styles from "../css/service.module.css";
import { Carousel } from 'antd';

export const Services = () => {
    const contentStyle = {
        margin: 0,
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
  return (
    <div className={styles.parent}>
      <div className={styles.leftContainer}>
        <h1 className={styles.title}>Our Services</h1>
        <p className={styles.sub}>
          In a nutshell, we manufacture quality leather without a compromise in
          the authenticity in raw material.
        </p>
      </div>
    </div>
  );
};
