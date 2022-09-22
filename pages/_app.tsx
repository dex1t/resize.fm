import { useEffect } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import "../styles/globals.scss";
import AppLayout from "../components/layouts/AppLayout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
};

export default App;
