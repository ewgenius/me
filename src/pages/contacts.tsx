import { Mail, Linkedin, MessageCircle } from "react-feather";
import { Layout } from "@components/Layout";
import { getLocaleStaticProps } from "utils";
import { PropsWithLocale } from "@utils/withLocale";

export type ContactsProps = PropsWithLocale<{}>;

export default function Contacts({ messages }: ContactsProps) {
  return (
    <Layout title={messages["page.contacts"]}>
      <ul className="ml-2 mt-4 text-lg">
        <li>
          <a className="flex items-center" href="mailto:ewgeniux@gmail.com">
            <Mail className="mr-2" size={16} />
            <span>ewgeniux@gmail.com</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center"
            href="https://www.linkedin.com/in/ewgenius/"
            target="__blank"
          >
            <Linkedin className="mr-2" size={16} />
            <span>linkedin/ewgenius</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center"
            href="https://t.me/ewgenius"
            target="__blank"
          >
            <MessageCircle className="mr-2" size={16} />
            <span>t.me/ewgenius</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center"
            href="https://vk.com/iewgenius"
            target="__blank"
          >
            <MessageCircle className="mr-2" size={16} />
            <span>vk.com/iewgenius</span>
          </a>
        </li>
      </ul>
    </Layout>
  );
}

export const getStaticProps = getLocaleStaticProps;
