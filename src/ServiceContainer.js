import styles from "./ServiceContainer.module.css";

function ServiceContainer({ children }) {
  return <div className={styles.serviceContainer}>{children}</div>;
}

export default ServiceContainer;
