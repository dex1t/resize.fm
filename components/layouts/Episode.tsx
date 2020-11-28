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
        <title>{`${getEpNumber(frontMatter.__resourcePath)}: ${
          frontMatter.title
        } - resize.fm`}</title>
        <link rel="icon" href="/favicon.ico" />
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
