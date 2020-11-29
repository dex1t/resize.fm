import styles from "../styles/index.module.scss";
import Link from "next/link";
import Image from "next/image";
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
                    <div className={styles.thumbnail}>
                      <Image
                        src={`/images/grad_${
                          getEpNumber(page.__resourcePath) % 8
                        }.png`}
                        width={120}
                        height={120}
                        objectFit="cover"
                      />
                      <div className={styles.number}>
                        {getEpNumber(page.__resourcePath)}
                      </div>
                    </div>
                    <div className={styles.contents}>
                      <div className={styles.title}>{page.title}</div>
                      <div className={styles.description}>
                        {page.description}
                      </div>
                      <ul className={styles.meta}>
                        <li className={styles.date}>
                          <Image
                            src="/images/calendar.svg"
                            width={12}
                            height={12}
                          />
                          <span>{page.date}</span>
                        </li>
                        <li className={styles.time}>
                          <Image
                            src="/images/play.svg"
                            width={12}
                            height={12}
                          />
                          <span>{page.time}</span>
                        </li>
                      </ul>
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
