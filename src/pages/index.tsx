import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ewgenius</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main>
        <img className="avatar" src="/images/avatar.png" />
        <h1 className="title">ewgenius</h1>
        <p className="description">Making things</p>
      </main>
    </div>
  );
}
