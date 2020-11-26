import Head from "next/head";
import EmbedAnchor from "../EmbedAnchor";

export default function Episode({ children, frontMatter }) {
  return (
    <article>
      <Head>
        <title>{frontMatter.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>{frontMatter.anchor}</p>
      <h1>{frontMatter.title}</h1>
      {children}
    </article>
  );
}
