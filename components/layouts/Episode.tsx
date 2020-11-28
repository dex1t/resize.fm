import Head from "next/head";
import EmbedAnchor from "../EmbedAnchor";
import styles from "../../styles/episode.module.scss";
import Header from "../Header";
import Footer from "../Footer";

export default function Episode({ children, frontMatter }) {
  const epNum = frontMatter.__resourcePath.match(/^ep\/([0-9]+)-/)[1];
  return (
    <>
      <Head>
        <title>{`${epNum}: ${frontMatter.title} - resize.fm`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <article className="episode-detail">
        <h1 className="episodeDetail-title">{frontMatter.title}</h1>
        <span className="episodeDetail-number">{frontMatter.number}</span>
        <span className="episodeDetail-date">{frontMatter.date}</span>
        <span className="episodeDetail-time">{frontMatter.time}</span>
        <div className="episodeDetail-player"><EmbedAnchor src={frontMatter.src}></EmbedAnchor></div>
        <p className="episodeDetail-description">{frontMatter.description}</p>
        <div className="episodeDetail-contents">{children}</div>
      </article>
      <Footer/>
    </>
  );
}
