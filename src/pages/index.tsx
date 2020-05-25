import Head from "next/head";
import { RiInstagramLine, RiTwitterLine, RiGithubLine } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <Head>
        <title>ewgenius</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div className="container">
        <main>
          <img className="avatar" src="/images/avatar.png" alt="logo" />
          <h1 className="title">ewgenius</h1>
          <p className="description">Making things...</p>
        </main>

        <footer>
          <div className="links">
            <a href="https://github.com/ewgenius" target="__blank">
              <RiGithubLine />
            </a>
            <a href="https://instagram.com/ewgeniux" target="__blank">
              <RiInstagramLine />
            </a>
            <a href="https://twitter.com/ewgeniux" target="__blank">
              <RiTwitterLine />
            </a>
          </div>
          <small>&copy; 2020, ewgenius.me</small>
        </footer>
      </div>
    </>
  );
}
