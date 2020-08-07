import { PropsWithChildren } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  GitHub,
  Instagram,
  Twitter,
  Linkedin,
  ArrowLeftCircle,
} from "react-feather";
import { useLocale } from "utils/useLocale";
import { ToggleTheme } from "@components/ToggleTheme";
import { ToggleLang } from "@components/ToggleLang";

export interface LayoutProps {
  title?: string;
  description?: string;
  disableBack?: boolean;
  parentPage?: string;
  center?: boolean;
}

export const Layout = ({
  children,
  title,
  description,
  disableBack,
  parentPage,
  center,
}: PropsWithChildren<LayoutProps>) => {
  const { lang } = useLocale();

  return (
    <>
      <Head>
        {title && <title>{title}</title>}
        {title && <meta property="og:title" content={title} />}
        {description && <meta name="description" content={description} />}
        {description && <meta name="og:description" content={description} />}
      </Head>
      <div className="container mx-auto">
        <main className={center ? "center" : ""}>
          <ToggleLang />
          <ToggleTheme />
          {title && (
            <h1 className="page-title">
              {!disableBack && (
                <Link
                  as={parentPage ? parentPage : "/" + lang}
                  href={parentPage ? `/[lang]/${parentPage}` : `/[lang]`}
                >
                  <a className="back">
                    <ArrowLeftCircle />
                  </a>
                </Link>
              )}
              {title}
            </h1>
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
    </>
  );
};
