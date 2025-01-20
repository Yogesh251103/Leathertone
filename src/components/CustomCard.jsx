import styles from "../css/card.module.css";

function CustomCard({ src, title, content }) {
  return (
    <div className={styles.parent}>
      <img src={src} alt="Leather" className={styles.img} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>{content}</p>
    </div>
  );
}
export default CustomCard;
