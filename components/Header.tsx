import styles from "../styles/header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <Link href="/"><img src="/images/logo.png" width="250" alt="resize.fm" title="resize.fm" /></Link>
      </h1>
    </header>
  );
}
