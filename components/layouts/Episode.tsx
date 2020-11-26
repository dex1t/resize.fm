import Head from "next/head";
import EmbedAnchor from "../EmbedAnchor";

export default function Episode({ children, frontMatter }) {
  const epNum = frontMatter.__resourcePath.match(/^ep\/([0-9]+)-/)[1];
  return (
    <>
      <Head>
        <title>{`${epNum}: ${frontMatter.title} - resize.fm`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article>
        <h1>{frontMatter.title}</h1>
        <EmbedAnchor src={frontMatter.src}></EmbedAnchor>
        <p>{frontMatter.description}</p>
        {children}
      </article>
    </>
  );
}
