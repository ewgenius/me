import Head from "next/head";
import { AppPropsType } from "next/dist/next-server/lib/utils";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as Fathom from "fathom-client";
import "tailwindcss/tailwind.css";

export default function App({ Component, pageProps }: AppPropsType) {
  const router = useRouter();

  useEffect(() => {
    // Initialize Fathom when the app loads
    Fathom.load("EPPOOMQT", {
      includedDomains: ["ewgenius.me"],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, []);

  useEffect(() => {
    const prefersDarkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const setTheme = () => {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) && prefersDarkQuery.matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    prefersDarkQuery.addEventListener("change", setTheme);
    setTheme();

    return () => prefersDarkQuery.removeEventListener("change", setTheme);
  }, []);

  return (
    <>
      <Head>
        <title>ewgenius</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Evgenii Khramkov personal page" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
