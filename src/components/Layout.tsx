import { PropsWithChildren } from "react";
import Head from "next/head";
import useDarkMode from "use-dark-mode";
import Link from "next/link";
import {
  GitHub,
  Instagram,
  Twitter,
  Linkedin,
  ArrowLeftCircle,
  Sun,
  Moon,
} from "react-feather";

export interface LayoutProps {
  title?: string;
  disableBack?: boolean;
  parentPage?: string;
}

export const Layout = ({
  children,
  title,
  disableBack,
  parentPage,
}: PropsWithChildren<LayoutProps>) => {
  const darkMode = useDarkMode();

  return (
    <div className="container">
      <main>
        <button
          aria-label="toggle theme"
          className="theme"
          onClick={darkMode.toggle}
        >
          {darkMode.value ? <Moon /> : <Sun />}
        </button>
        {title && (
          <>
            <Head>
              <title>{title}</title>
            </Head>
            <h1 className="page-title">
              {!disableBack && (
                <Link href={parentPage ? parentPage : "/"}>
                  <a className="back">
                    <ArrowLeftCircle />
                  </a>
                </Link>
              )}
              {title}
            </h1>
          </>
        )}
        {children}
      </main>
      <footer>
        <div className="links">
          <a href="https://github.com/ewgenius" target="__blank">
            <GitHub size={16} />
          </a>
          <a href="https://instagram.com/ewgeniux" target="__blank">
            <Instagram size={16} />
          </a>
          <a href="https://twitter.com/ewgeniux" target="__blank">
            <Twitter size={16} />
          </a>
          <a href="https://www.linkedin.com/in/ewgenius/" target="__blank">
            <Linkedin size={16} />
          </a>
        </div>
        <small>&copy; 2020, ewgenius.me</small>
      </footer>
    </div>
  );
};
