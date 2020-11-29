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
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#F7F7F7"/>
        <meta name="keywords" content="resizefm, podcast, リサイズ, エフエム, ポッドキャスト, design, service"/>
        <meta name="description" content="元山（@kudakurage）と出口（@dex1t）が最近気になっているサービスやデザイントピックスを取り上げてのんびり話すPodcastです。 #resizefm"/>
        <meta property="og:site_name" content="resize.fm"/>
        <meta property="og:url" content="https://resize.fm/"/>
        <meta property="og:title" content="resize.fm"/>
        <meta property="og:description" content="元山（@kudakurage）と出口（@dex1t）が最近気になっているサービスやデザイントピックスを取り上げてのんびり話すPodcastです。 #resizefm"/>
        <meta property="og:image" content="https://resize.fm/images/resizefm_ogp.png"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:type" content="website"/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@resizefm"/>
        <meta name="twitter:url" content="https://resize.fm/"/>
        <meta name="twitter:title" content="resize.fm"/>
        <meta name="twitter:description" content="元山（@kudakurage）と出口（@dex1t）が最近気になっているサービスやデザイントピックスを取り上げてのんびり話すPodcastです。 #resizefm"/>
        <meta name="twitter:image" content="https://resize.fm/images/resizefm_ogp.png"/>
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
                  <span className={styles.date}>{page.date}</span>
                  <span className={styles.time}>{page.time}</span>
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
