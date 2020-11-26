import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { frontMatter as docsPages } from "./ep/*.mdx";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>resize.fm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>resize.fm</h1>
      </main>
      <ul>
        {docsPages.map((page) => (
          <li key={page.__resourcePath}>
            <Link href={page.__resourcePath.replace(/\.mdx$/, "")}>
              <a>{page.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
