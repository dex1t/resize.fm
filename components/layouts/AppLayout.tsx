import Head from "next/head";

export default function AppLayout({ children }) {
  const url = "https://resize.fm/";
  const ogp = `${url}images/resizefm_ogp.png`;
  const description =
    "元山（@kudakurage）と出口（@dex1t）が最近気になっているサービスやデザイントピックスを取り上げてのんびり話すPodcastです。 #resizefm";
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#F7F7F7" />
        <meta
          name="keywords"
          content="resizefm, podcast, リサイズ, エフエム, ポッドキャスト, design, product, web service"
        />
        <meta name="author" content="出口貴也, 元山和之" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="resize.fm" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:site" content="@resizefm" />

        {/* require "key" props due to overwrite by layotus/Episode */}
        <title key="title">resize.fm</title>
        <meta key="description" name="description" content={description} />
        <meta key="og:url" property="og:url" content={url} />
        <meta key="og:title" property="og:title" content="resize.fm" />
        <meta
          key="og:description"
          property="og:description"
          content={description}
        />
        <meta key="og:image" property="og:image" content={ogp} />
        <meta key="twitter:image" name="twitter:image" content={ogp} />
        <meta key="twitter:url" name="twitter:url" content={url} />
        <meta key="twitter:title" name="twitter:title" content="resize.fm" />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={description}
        />
        <meta key="twitter:card" name="twitter:card" content="summary" />
      </Head>
      {children}
    </>
  );
}
