import Services from "./Services";
import Copyright from "./Copyright";
import styles from "../styles/globals.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Services/>
      <Copyright/>
    </div>
  );
}
