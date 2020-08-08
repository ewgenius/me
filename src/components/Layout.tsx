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
import { ToggleLang } from "@components/ToggleLang";
// import { ToggleTheme } from "@components/ToggleTheme";

export interface LayoutProps {
  title?: string;
  description?: string;
  disableBack?: boolean;
  parentPage?: string;
}

export const Layout = ({
  children,
  title,
  description,
  disableBack,
  parentPage,
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
      <div className="text-gray-800 container mx-auto max-w-4xl min-h-screen flex flex-col p-4">
        <main className="flex-grow">
          <nav className="flex flex-row pb-4 h-16">
            {title && (
              <h1 className="flex text-4xl font-bold items-center">
                {!disableBack && (
                  <Link
                    as={parentPage ? `/${lang}/${parentPage}` : `/${lang}`}
                    href={parentPage ? `/[lang]/${parentPage}` : `/[lang]`}
                  >
                    <a className="mr-2 mt-1">
                      <ArrowLeftCircle size={32} />
                    </a>
                  </Link>
                )}
                {title}
              </h1>
            )}
            <div className="flex-grow" />
            <ToggleLang />
            {/* <ToggleTheme /> */}
          </nav>
          {children}
        </main>
        <footer className="flex flex-col justify-center items-center text-gray-600 mt-8">
          <div className="flex justify-center">
            <a
              className="text-gray-600 hover:text-gray-800 mr-1"
              href="https://github.com/ewgenius"
              target="__blank"
            >
              <GitHub size={16} />
            </a>
            <a
              className="text-gray-600 hover:text-gray-800 mr-1"
              href="https://instagram.com/ewgeniux"
              target="__blank"
            >
              <Instagram size={16} />
            </a>
            <a
              className="text-gray-600 hover:text-gray-800 mr-1"
              href="https://twitter.com/ewgeniux"
              target="__blank"
            >
              <Twitter size={16} />
            </a>
            <a
              className="text-gray-600 hover:text-gray-800"
              href="https://www.linkedin.com/in/ewgenius/"
              target="__blank"
            >
              <Linkedin size={16} />
            </a>
          </div>
          <small>&copy; 2020, ewgenius.me</small>
        </footer>
      </div>
    </>
  );
};
