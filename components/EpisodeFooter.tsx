import Services from "./Services";
import Copyright from "./Copyright";
import styles from "../styles/episode.module.scss";

export default function EpisodeFooter() {
  return (
    <div className={styles.footer}>
      <Services />
      <Copyright />
    </div>
  );
}
