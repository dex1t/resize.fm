import styles from "../styles/globals.module.scss";

export default function Services() {
  return (
    <div className={styles.services}>
        <p className={styles.siteDescription}>
            元山 (<a href="">@kudakurage</a>) と出口 (<a href="">@dex1t</a>) が最近気になっているサービスやデザイントピックスを取り上げてのんびり話すPodcastです。毎週金曜日に配信します。<br/>
            感想や質問などは、Twitterでハッシュタグ <a href="">#resizefm</a> をご利用ください。
        </p>
        <div className={styles.buttons}>
            <a href="" className={styles.buttonItem}>
                <img src="/images/service_icon_mono_apple.png" width="18" className={styles.iconMono}/>
                <img src="/images/service_icon_color_apple.png" width="18" className={styles.iconColor}/>
                iTunes
            </a>
            <a href="" className={styles.buttonItem}>
                <img src="/images/service_icon_mono_googlepodcast.png" width="18" className={styles.iconMono}/>
                <img src="/images/service_icon_color_googlepodcast.png" width="18" className={styles.iconColor}/>
                Google
            </a>
            <a href="" className={styles.buttonItem}>
                <img src="/images/service_icon_mono_spotify.png" width="18" className={styles.iconMono}/>
                <img src="/images/service_icon_color_spotify.png" width="18" className={styles.iconColor}/>
                Spotify
            </a>
            <a href="" className={styles.buttonItem}>
                <img src="/images/service_icon_mono_youtube.png" width="18" className={styles.iconMono}/>
                <img src="/images/service_icon_color_youtube.png" width="18" className={styles.iconColor}/>
                YouTube
            </a>
            <a href="" className={styles.buttonItem}>
                <img src="/images/service_icon_mono_twitter.png" width="18" className={styles.iconMono}/>
                <img src="/images/service_icon_color_twitter.png" width="18" className={styles.iconColor}/>
                Twitter
            </a>
        </div>
    </div>
  );
}
