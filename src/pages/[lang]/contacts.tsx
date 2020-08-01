import { Mail, Linkedin, MessageCircle } from "react-feather";
import { Layout } from "@components/Layout";
import { GetStaticProps } from "next";
import { getLangStaticPaths } from "utils";

export default function Contacts() {
  return (
    <Layout title="Contacts">
      <ul className="contacts">
        <li>
          <a href="mailto:ewgeniux@gmail.com">
            <Mail size={16} />
            ewgeniux@gmail.com
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ewgenius/" target="__blank">
            <Linkedin size={16} />
            linkedin/ewgenius
          </a>
        </li>
        <li>
          <a href="https://t.me/ewgenius" target="__blank">
            <MessageCircle size={16} />
            t.me/ewgenius
          </a>
        </li>
        <li>
          <a href="https://vk.com/iewgenius" target="__blank">
            <MessageCircle size={16} />
            vk.com/iewgenius
          </a>
        </li>
      </ul>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<{}> = async () => {
  return {
    props: {},
  };
};

export const getStaticPaths = getLangStaticPaths;
