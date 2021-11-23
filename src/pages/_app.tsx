import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { usePanelbear } from "../utils/usePanelbear";

function MyApp({ Component, pageProps }: AppProps) {
  usePanelbear("F7tQmArIkew");
  return <Component {...pageProps} />;
}
export default MyApp;
