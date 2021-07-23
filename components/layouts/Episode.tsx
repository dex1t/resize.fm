import Head from "next/head";
import EmbedAnchor from "../EmbedAnchor";
import styles from "../../styles/episode.module.scss";
import Header from "../Header";
import EpisodeFooter from "../EpisodeFooter";
import { getEpNumber, formatPath } from "../../lib/pageResource";
import Image from "next/image";
import Link from "next/link";
import { TwitterShareButton, TwitterIcon } from "react-share";

export default function Episode({ children, frontMatter }) {
  const epNum = getEpNumber(frontMatter.__resourcePath);
  const epPath = formatPath(frontMatter.__resourcePath);

  const title = `#${epNum} ${frontMatter.title} | resize.fm`;
  const baseUrl = `https://resize.fm`;
  const epUrl = `${baseUrl}${epPath}`;
  const thumbnailUrl = `${baseUrl}/thumbnails/${epNum}.jpg`;

  return (
    <>
      <Head>
        <title key="title">{title}</title>
        <meta
          key="description"
          name="description"
          content={frontMatter.description}
        />
        <meta key="og:url" property="og:url" content={epUrl} />
        <meta key="og:title" property="og:title" content={title} />
        <meta
          key="og:description"
          property="og:description"
          content={frontMatter.description}
        />
        <meta key="twitter:url" name="twitter:url" content={epUrl} />
        <meta key="tiwtter:title" name="twitter:title" content={title} />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={frontMatter.description}
        />
        <meta
          key="twitter:card"
          name="twitter:card"
          content="summary_large_image"
        />
        {frontMatter.existThumbnail && (
          <>
            <meta
              key="twitter:image"
              name="twitter:image"
              content={thumbnailUrl}
            />
            <meta key="og:image" property="og:image" content={thumbnailUrl} />
          </>
        )}
      </Head>

      <Header />
      <article className={styles.episodeDetail}>
        <h1 className={styles.title}>{frontMatter.title}</h1>
        <ul className={styles.meta}>
          <li>
            <Image src="/images/sharp.svg" width={12} height={12} />
            <span>{epNum}</span>
          </li>
          <li>
            <Image src="/images/calendar.svg" width={12} height={12} />
            <span>{frontMatter.date}</span>
          </li>
          <li>
            <Image src="/images/play.svg" width={12} height={12} />
            <span>{frontMatter.time}</span>
          </li>
          <li>
            <TwitterShareButton
              url={epUrl}
              title={title}
              hashtags={["resizefm"]}
              related={["@resizefm"]}
              className={styles.tweet}
            >
              <TwitterIcon size={18} />
              <span>Tweet</span>
            </TwitterShareButton>
          </li>
        </ul>
        <div className={styles.player}>
          {frontMatter.src && <EmbedAnchor src={frontMatter.src}></EmbedAnchor>}
        </div>
        <p className={styles.description}>{frontMatter.description}</p>
        <div className={styles.contents}>{children}</div>
        <div className={styles.contentsFooter}>
          <p>
            resize.fmへのご意見・ご感想は、
            <Link href="https://forms.gle/hkHbCpdTfe54MSyq9">
              <a>おたより（Googleフォーム）</a>
            </Link>
            で送っていただくか、Twitterで
            <Link href="https://twitter.com/search?q=%23resizefm&src=typed_query&f=live">
              <a>#resizefm</a>
            </Link>
            をつけて投稿してください！
          </p>
          <p className={styles.subtle}>
            ※ご意見・ご感想は配信内でご紹介させていただくことがあります
          </p>
        </div>
      </article>
      <EpisodeFooter />
    </>
  );
}
