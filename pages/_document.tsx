import Document, { Html, Head, Main, NextScript } from "next/document";
import GATag from "../components/GATag";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <GATag />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
