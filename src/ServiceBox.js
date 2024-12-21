import styles from "./ServiceBox.module.css";
function ServiceBox({ header, text, image, borderColor, imageAlt }) {
  return (
    <div
      style={{ borderTop: `3px solid var(--${borderColor})` }}
      className={styles.serviceBox}
    >
      <div className={styles.textBox}>
        <h3 className={styles.header}>{header}</h3>
        <p className={styles.text}>{text}</p>
      </div>

      <img src={image} alt={imageAlt} className={styles.img} />
    </div>
  );
}

export default ServiceBox;
