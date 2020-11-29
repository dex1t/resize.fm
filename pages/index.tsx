import styles from "../styles/globals.module.scss";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Services from "../components/Services";
import Copyright from "../components/Copyright";
import { frontMatter as docsPages } from "./ep/*.mdx";
import { getEpNumber } from "../utils/misc";

export default function Home() {
  return (
    <div>
      <Head>
        <title>resize.fm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Services />
      <ul className={styles.episodeList}>
        {docsPages.reverse().map((page) => (
          <li key={page.__resourcePath} className={styles.listItem}>
            <Link href={page.__resourcePath.replace(/\.mdx$/, "")}>
              <a>
                <img
                  src={`/images/grad_${
                    getEpNumber(page.__resourcePath) % 8
                  }.png`}
                  width="120"
                  className={styles.thumbnail}
                />
                <div className={styles.number}>{page.number}</div>
                <div className={styles.title}>{page.title}</div>
                <div className={styles.description}>{page.description}</div>
                <div className={styles.meta}>
                  <span className={styles.date}><img src="/images/calendar.svg" width="12"/>{page.date}</span>
                  <span className={styles.time}><img src="/images/play.svg" width="12"/>{page.time}</span>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <Copyright />
    </div>
  );
}
