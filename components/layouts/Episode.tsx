import Head from "next/head";
import EmbedAnchor from "../EmbedAnchor";
import styles from "../../styles/episode.module.scss";

export default function Episode({ children, frontMatter }) {
  const epNum = frontMatter.__resourcePath.match(/^ep\/([0-9]+)-/)[1];
  return (
    <>
      <Head>
        <title>{`${epNum}: ${frontMatter.title} - resize.fm`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article className={styles.article}>
        <h1>{frontMatter.title}</h1>
        <EmbedAnchor src={frontMatter.src}></EmbedAnchor>
        <p>{frontMatter.description}</p>
        {children}
      </article>
    </>
  );
}
