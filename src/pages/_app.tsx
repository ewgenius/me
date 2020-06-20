import Head from "next/head";
import { AppPropsType } from "next/dist/next-server/lib/utils";
import "../styles/index.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppPropsType) {
  return (
    <>
      <Head>
        <title>ewgenius</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
