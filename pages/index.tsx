import styles from "../styles/globals.module.scss";
import Link from "next/link";
import Header from "../components/Header";
import Services from "../components/Services";
import Copyright from "../components/Copyright";
import { frontMatter as docsPages } from "./ep/*.mdx";
import { getEpNumber, formatPath } from "../utils/pageResource";

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <Services />
        <ul className={styles.episodeList}>
          {docsPages
            .sort((p1, p2) => (p1.__resourcePath > p2.__resourcePath ? -1 : 1))
            .map((page) => (
              <li key={page.__resourcePath} className={styles.listItem}>
                <Link href={formatPath(page.__resourcePath)}>
                  <a>
                    <img
                      src={`/images/grad_${
                        getEpNumber(page.__resourcePath) % 8
                      }.png`}
                      width="120"
                      className={styles.thumbnail}
                    />
                    <div className={styles.number}>
                      {getEpNumber(page.__resourcePath)}
                    </div>
                    <div className={styles.title}>{page.title}</div>
                    <div className={styles.description}>{page.description}</div>
                    <div className={styles.meta}>
                      <span className={styles.date}>
                        <img src="/images/calendar.svg" width="12" />
                        {page.date}
                      </span>
                      <span className={styles.time}>
                        <img src="/images/play.svg" width="12" />
                        {page.time}
                      </span>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
        </ul>
      </main>
      <footer>
        <Copyright />
      </footer>
    </>
  );
}
