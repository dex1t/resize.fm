import styles from "../styles/services.module.scss";
import Link from "next/link";

export default function Services() {
  return (
    <div className={styles.services}>
      <p className={styles.siteDescription}>
        元山 (<a href="https://twitter.com/kudakurage">@kudakurage</a>) と出口 (
        <a href="https://twitter.com/dex1t">@dex1t</a>)
        が最近気になっているサービスやデザイントピックスを取り上げてのんびり話すPodcastです。毎週金曜日に配信します。
        <br />
        感想や質問などは、{" "}
        <a href="https://forms.gle/hkHbCpdTfe54MSyq9">おたより（Googleフォーム）</a>{" "}
        で送っていただくか、Twitterでハッシュタグ{" "}
        <a href="https://twitter.com/search?q=%23resizefm">#resizefm</a>{" "}
        をご利用ください。
      </p>
      <div className={styles.buttons}>
        <Link href="https://podcasts.apple.com/jp/podcast/resize-fm/id1542320522">
          <a className={styles.buttonItem}>
            <img
              src="/images/service_icon_mono_apple_podcast.png"
              width="18"
              className={styles.iconMono}
            />
            <img
              src="/images/service_icon_color_apple_podcast.png"
              width="18"
              className={styles.iconColor}
            />
            Apple
          </a>
        </Link>
        <Link href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy80MTZmMjA0OC9wb2RjYXN0L3Jzcw">
          <a className={styles.buttonItem}>
            <img
              src="/images/service_icon_mono_googlepodcast.png"
              width="18"
              className={styles.iconMono}
            />
            <img
              src="/images/service_icon_color_googlepodcast.png"
              width="18"
              className={styles.iconColor}
            />
            Google
          </a>
        </Link>
        <Link href="https://open.spotify.com/show/7A4HxFxQ2Kr4pyJ0e3VEYj">
          <a className={styles.buttonItem}>
            <img
              src="/images/service_icon_mono_spotify.png"
              width="18"
              className={styles.iconMono}
            />
            <img
              src="/images/service_icon_color_spotify.png"
              width="18"
              className={styles.iconColor}
            />
            Spotify
          </a>
        </Link>
        <Link href="https://music.amazon.co.jp/podcasts/b68f27de-365d-4584-8685-1ded2c65fb83/resizefm">
          <a className={styles.buttonItem}>
            <img
              src="/images/service_icon_mono_amazon.png"
              width="18"
              className={styles.iconMono}
            />
            <img
              src="/images/service_icon_color_amazon.png"
              width="18"
              className={styles.iconColor}
            />
            Amazon
          </a>
        </Link>
        <Link href="https://www.youtube.com/channel/UCT07wIyz95ZRXUIh0iwcoCQ">
          <a className={styles.buttonItem}>
            <img
              src="/images/service_icon_mono_youtube.png"
              width="18"
              className={styles.iconMono}
            />
            <img
              src="/images/service_icon_color_youtube.png"
              width="18"
              className={styles.iconColor}
            />
            YouTube
          </a>
        </Link>
        <Link href="https://twitter.com/resizefm">
          <a className={styles.buttonItem}>
            <img
              src="/images/service_icon_mono_twitter.png"
              width="18"
              className={styles.iconMono}
            />
            <img
              src="/images/service_icon_color_twitter.png"
              width="18"
              className={styles.iconColor}
            />
            Twitter
          </a>
        </Link>
        <Link href="https://www.instagram.com/resizefm/">
          <a className={styles.buttonItem}>
            <img
              src="/images/service_icon_mono_instagram.png"
              width="18"
              className={styles.iconMono}
            />
            <img
              src="/images/service_icon_color_instagram.png"
              width="18"
              className={styles.iconColor}
            />
            Instagram
          </a>
        </Link>
      </div>
    </div>
  );
}
