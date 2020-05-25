import { PropsWithChildren } from "react";
import { RiGithubLine, RiInstagramLine, RiTwitterLine } from "react-icons/ri";

export const Layout = ({ children }: PropsWithChildren<{}>) => (
  <div className="container">
    <main>{children}</main>
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
);
