import { Asciivatar } from "./asciivatar";

export default function Home() {
  return (
    <div className="p-4 grow">
      <main className="max-w-7xl mx-auto text-sm">
        <div className="space-y-2 max-w-2xl">
          <Asciivatar />
          <p className="break-words">Hello!👋 I&apos;m Evgenii</p>
          <p className="break-words">
            You can find me at{" "}
            <a
              href="https://github.com/ewgenius"
              className="whitespace-nowrap font-semibold hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              github.com/ewgenius
            </a>
            ,{" "}
            <a
              href="https://x.com/ewgeniux"
              className="whitespace-nowrap font-semibold hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              x.com/ewgeniux
            </a>
            ,{" "}
            <a
              href="https://www.linkedin.com/in/ewgenius"
              className="whitespace-nowrap font-semibold hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/ewgenius
            </a>{" "}
            or directly contact me at
            <a
              href="mailto:hey@ewgenius.me"
              className="whitespace-nowrap font-semibold hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              hey@ewgenius.me
            </a>{" "}
            or{" "}
            <a
              href="https://t.me/ewgenius"
              className="whitespace-nowrap font-semibold hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              t.me/ewgenius
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
