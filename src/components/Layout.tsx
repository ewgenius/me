import { PropsWithChildren } from "react";
import { GitHub, Instagram, Twitter } from "react-feather";

export const Layout = ({ children }: PropsWithChildren<{}>) => (
  <div className="container">
    <main>{children}</main>
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
      </div>
      <small>&copy; 2020, ewgenius.me</small>
    </footer>
  </div>
);
