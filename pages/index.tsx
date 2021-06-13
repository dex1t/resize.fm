import styles from "../styles/index.module.scss";
import { GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Services from "../components/Services";
import Copyright from "../components/Copyright";
import {
  FrontMatter,
  getSortedEpisodes,
  getEpNumber,
  formatPath,
} from "../lib/pageResource";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      pages: getSortedEpisodes(),
    },
  };
};

export default function Index({ pages }) {
  return (
    <>
      <Header />
      <main>
        <Services />
        <ul className={styles.episodeList}>
          {pages.map((page: FrontMatter) => (
            <li key={page.__resourcePath} className={styles.listItem}>
              <Link href={formatPath(page.__resourcePath)}>
                <a>
                  <div className={styles.thumbnail}>
                    <Image
                      src={page.squareThumbnailPath}
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
                    <div className={styles.description}>{page.description}</div>
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
                        <Image src="/images/play.svg" width={12} height={12} />
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
