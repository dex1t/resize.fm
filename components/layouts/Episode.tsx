import Head from "next/head";
import EmbedAnchor from "../EmbedAnchor";
import styles from "../../styles/episode.module.scss";
import Header from "../Header";
import EpisodeFooter from "../EpisodeFooter";
import { getEpNumber, formatPath } from "../../utils/pageResource";
import Image from "next/image";

export default function Episode({ children, frontMatter }) {
  const epNum = getEpNumber(frontMatter.__resourcePath);
  const epPath = formatPath(frontMatter.__resourcePath);

  const title = `#${epNum} ${frontMatter.title} | resize.fm`;
  const url = `https://resize.fm${epPath}`;

  return (
    <>
      <Head>
        <title key="title">{title}</title>
        <meta
          key="description"
          name="description"
          content={frontMatter.description}
        />
        <meta key="og:url" property="og:url" content={url} />
        <meta key="og:title" property="og:title" content={title} />
        <meta
          key="og:description"
          property="og:description"
          content={frontMatter.description}
        />
        <meta key="twitter:url" name="twitter:url" content={url} />
        <meta key="tiwtter:title" name="twitter:title" content={title} />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={frontMatter.description}
        />
      </Head>

      <Header />
      <article className={styles.episodeDetail}>
        <h1 className={styles.title}>{frontMatter.title}</h1>
        <div className={styles.meta}>
          <div className={styles.number}>
            <Image src="/images/sharp.svg" width={12} height={12} />
            <span>{frontMatter.number}</span>
          </div>
          <div className={styles.date}>
            <Image src="/images/calendar.svg" width={12} height={12} />
            <span>{frontMatter.date}</span>
          </div>
          <div className={styles.time}>
            <Image src="/images/play.svg" width={12} height={12} />
            <span>{frontMatter.time}</span>
          </div>
        </div>
        <div className={styles.player}>
          <EmbedAnchor src={frontMatter.src}></EmbedAnchor>
        </div>
        <p className={styles.description}>{frontMatter.description}</p>
        <div className={styles.contents}>{children}</div>
      </article>
      <EpisodeFooter />
    </>
  );
}
