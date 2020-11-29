import Head from "next/head";
import EmbedAnchor from "../EmbedAnchor";
import styles from "../../styles/episode.module.scss";
import Header from "../Header";
import Footer from "../Footer";
import { getEpNumber } from "../../utils/misc";

export default function Episode({ children, frontMatter }) {
  return (
    <>
      <Head>
        <title>{`#${getEpNumber(frontMatter.__resourcePath)} ${
          frontMatter.title
        } | resize.fm`}</title>
        <link rel="shortcut icon" href="/favicon.ico"/>
        <meta name="theme-color" content="#F7F7F7"/>
        <meta name="keywords" content="resizefm, podcast, リサイズ, エフエム, ポッドキャスト, design, service"/>
        <meta name="description" content={frontMatter.description} />
        <meta property="og:site_name" content="resize.fm"/>
        <meta property="og:url" content={`https://resize.fm/${frontMatter.__resourcePath.replace(/\.mdx$/, "")}`}/>
        <meta property="og:title" content={`#${getEpNumber(frontMatter.__resourcePath)} ${
          frontMatter.title
        } | resize.fm`}/>
        <meta property="og:description" content={frontMatter.description}/>
        <meta property="og:image" content="https://resize.fm/images/resizefm_ogp.png"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:type" content="website"/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@resizefm"/>
        <meta name="twitter:url" content={`https://resize.fm/${frontMatter.__resourcePath.replace(/\.mdx$/, "")}`}/>
        <meta name="twitter:title" content={`#${getEpNumber(frontMatter.__resourcePath)} ${
          frontMatter.title
        } | resize.fm`}/>
        <meta name="twitter:description" content={frontMatter.description}/>
        <meta name="twitter:image" content="https://resize.fm/images/resizefm_ogp.png"/>
      </Head>

      <Header />
      <article className={styles.episodeDetail}>
        <h1 className={styles.title}>{frontMatter.title}</h1>
        <div className={styles.meta}>
          <span className={styles.number}>{frontMatter.number}</span>
          <span className={styles.date}>{frontMatter.date}</span>
          <span className={styles.time}>{frontMatter.time}</span>
        </div>
        <div className={styles.player}>
          <EmbedAnchor src={frontMatter.src}></EmbedAnchor>
        </div>
        <p className={styles.description}>{frontMatter.description}</p>
        <div className={styles.contents}>{children}</div>
      </article>
      <Footer />
    </>
  );
}
