import { PropsWithChildren } from "react";
import {
  GitHub,
  Instagram,
  Twitter,
  Linkedin,
  ArrowLeftCircle,
} from "react-feather";
import Link from "next/link";

export interface LayoutProps {
  title?: string;
  disableBack?: boolean;
}

export const Layout = ({
  children,
  title,
  disableBack,
}: PropsWithChildren<LayoutProps>) => (
  <div className="container">
    <main>
      {title && (
        <h1 className="page-title">
          {!disableBack && (
            <Link href="/">
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
);
