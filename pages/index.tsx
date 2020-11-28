import Head from "next/head";
import styles from "../styles/index.module.scss";
import Link from "next/link";
import Header from "../components/partial/Header";
import Services from "../components/partial/Services";
import Copyright from "../components/partial/Copyright";
import { frontMatter as docsPages } from "./ep/*.mdx";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>resize.fm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Services/>
      <ul>
        {docsPages.map((page) => (
          <li key={page.__resourcePath}>
            <Link href={page.__resourcePath.replace(/\.mdx$/, "")}>
              <a>{page.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <Copyright/>
    </div>
  );
}
