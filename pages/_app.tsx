import "../styles/globals.scss";
import { AppProps } from "next/app";
import Router from "next/router";
import * as gtag from "../lib/gtag";

Router.events.on("routeChangeComplete", (path) => {
  gtag.pageview(path);
});

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
