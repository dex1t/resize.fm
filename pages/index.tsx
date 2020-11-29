import styles from "../styles/globals.module.scss";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Services from "../components/Services";
import Copyright from "../components/Copyright";
import { frontMatter as docsPages } from "./ep/*.mdx";
import { getEpNumber, formatPath } from "../utils/pageResource";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#F7F7F7" />
        <meta
          name="keywords"
          content="resizefm, podcast, リサイズ, エフエム, ポッドキャスト, design, service"
        />
        <meta
          name="description"
          content="元山（@kudakurage）と出口（@dex1t）が最近気になっているサービスやデザイントピックスを取り上げてのんびり話すPodcastです。 #resizefm"
        />
        <meta property="og:site_name" content="resize.fm" />
        <meta property="og:url" content="https://resize.fm/" />
        <meta property="og:title" content="resize.fm" />
        <meta
          property="og:description"
          content="元山（@kudakurage）と出口（@dex1t）が最近気になっているサービスやデザイントピックスを取り上げてのんびり話すPodcastです。 #resizefm"
        />
        <meta
          property="og:image"
          content="https://resize.fm/images/resizefm_ogp.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@resizefm" />
        <meta name="twitter:url" content="https://resize.fm/" />
        <meta name="twitter:title" content="resize.fm" />
        <meta
          name="twitter:description"
          content="元山（@kudakurage）と出口（@dex1t）が最近気になっているサービスやデザイントピックスを取り上げてのんびり話すPodcastです。 #resizefm"
        />
        <meta
          name="twitter:image"
          content="https://resize.fm/images/resizefm_ogp.png"
        />
      </Head>

      <Header />
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
      <Copyright />
    </div>
  );
}
