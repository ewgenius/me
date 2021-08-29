import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "react-feather";
import { Layout } from "@components/Layout";
import { GetStaticProps } from "next";
import { notion } from "@utils/notion";
import {
  PropertyValue,
  Page,
  TitlePropertyValue,
  RichText,
  RichTextText,
  RichTextPropertyValue,
} from "@notionhq/client/build/src/api-types";

export const RichTextTextRenderer = ({ value }: { value: RichText }) => {
  const type = value.type;

  switch (type) {
    case "text":
      return <span>{(value as RichTextText).text.content}</span>;
  }

  return null;
};

export const PropertyValueRenderer = ({ value }: { value: PropertyValue }) => {
  const type = value.type;

  switch (type) {
    case "title":
      return (
        <div>
          {(value as TitlePropertyValue).title.map((i) => (
            <RichTextTextRenderer value={i} />
          ))}
        </div>
      );
    case "rich_text":
      return (
        <div>
          {(value as RichTextPropertyValue).rich_text.map((i) => (
            <RichTextTextRenderer value={i} />
          ))}
        </div>
      );
  }

  return <div>{type}</div>;
};

export default function Home({ timeline }: { timeline: Page[] }) {
  return (
    <Layout>
      <header className="flex flex-col justify-center items-center pb-8">
        <Image src="/images/avatar.png" width={192} height={192} alt="logo" />
        <h1 className="text-3xl font-bold">ewgenius</h1>
        <p className="text-gray-600 dark:text-gray-300">Making things...</p>
      </header>
      <div className="flex flex-col text-lg justify-center items-center">
        <nav className="">
          <Link href="/contacts">
            <a className="flex items-center">
              <ArrowRight className="mr-1" size={16} />
              contacts
            </a>
          </Link>
        </nav>
        <div>
          {timeline &&
            timeline.map((item) => (
              <div>
                <PropertyValueRenderer value={item.properties.title} />
                <PropertyValueRenderer value={item.properties.description} />
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}

// https://www.notion.so/ewgenius/8225e42a4cec4e069fc23dfbd769c54d?v=e140ddee90b64895b8c5e50f5d2ecd7d

export const getStaticProps: GetStaticProps = async () => {
  const data = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_TIMLINE_ID,
  });

  console.log(data.results[1].properties);

  return {
    props: {
      timeline: data.results,
    },
  };
};
