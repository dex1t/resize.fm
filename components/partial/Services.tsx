export default function Services() {
  return (
    <div className="services">
        <p>
            元山 (<a href="">@kudakurage</a>) と出口 (<a href="">@dex1t</a>) が最近気になっているサービスやデザイントピックスを取り上げてのんびり話すPodcastです。毎週金曜日に配信します。<br/>
            感想や質問などは、Twitterでハッシュタグ <a href="">#resizefm</a> をご利用ください。
        </p>
        <div className="services-buttons">
            <a href="" className="services-buttons-item">
                <img src="/images/service_icon_color_apple.png" width="18" className="services-buttons-item-icon-color"/>
                <img src="/images/service_icon_mono_apple.png" width="18" className="services-buttons-item-icon-mono"/>
                iTunes
            </a>
            <a href="" className="services-buttons-item">
                <img src="/images/service_icon_color_googlepodcast.png" width="18" className="services-buttons-item-icon-color"/>
                <img src="/images/service_icon_mono_googlepodcast.png" width="18" className="services-buttons-item-icon-mono"/>
                Google
            </a>
            <a href="" className="services-buttons-item">
                <img src="/images/service_icon_color_spotify.png" width="18" className="services-buttons-item-icon-color"/>
                <img src="/images/service_icon_mono_spotify.png" width="18" className="services-buttons-item-icon-mono"/>
                Spotify
            </a>
            <a href="" className="services-buttons-item">
                <img src="/images/service_icon_color_youtube.png" width="18" className="services-buttons-item-icon-color"/>
                <img src="/images/service_icon_mono_youtube.png" width="18" className="services-buttons-item-icon-mono"/>
                YouTube
            </a>
            <a href="" className="services-buttons-item">
                <img src="/images/service_icon_color_twitter.png" width="18" className="services-buttons-item-icon-color"/>
                <img src="/images/service_icon_mono_twitter.png" width="18" className="services-buttons-item-icon-mono"/>
                Twitter
            </a>
        </div>
    </div>
  );
}
