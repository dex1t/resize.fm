import styles from "../styles/copyright.module.scss";

export default function Copyright() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className={styles.copyright}>
      ©{year} <a href="/">resize.fm</a>
    </div>
  );
}
