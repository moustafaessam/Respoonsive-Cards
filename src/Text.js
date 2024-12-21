import styles from "./Text.module.css";

function Text() {
  return (
    <div className={styles.textContainer}>
      <p className={styles.header1}>Reliable, efficient delivery</p>
      <p className={styles.header2}>Powered by Technology</p>
      <p className={styles.description}>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
    </div>
  );
}

export default Text;
