import Head from "next/head";
import styles from "../styles/index.module.scss";
import Link from "next/link";
import Header from "../components/partial/Header";
import Services from "../components/partial/Services";
import Copyright from "../components/partial/Copyright";
import { frontMatter as docsPages } from "./ep/*.mdx";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>resize.fm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Services/>
      <ul className="episodeList">
        {docsPages.map((page) => (
          <li key={page.__resourcePath} className="episodeList-item">
            <Link href={page.__resourcePath.replace(/\.mdx$/, "")}>
              <a>
                <img src="" className="episodeList-item-thumbnail"/>
                <span className="episodeList-item-number">{page.number}</span>
                <span className="episodeList-item-title">{page.title}</span>
                <span className="episodeList-item-description">{page.description}</span>
                <span className="episodeList-item-date">{page.date}</span>
                <span className="episodeList-item-time">{page.time}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <Copyright/>
    </div>
  );
}
