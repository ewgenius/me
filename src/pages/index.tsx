import { FC, Fragment } from "react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Client as NotionClient } from "@notionhq/client";
import { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";

const notion = new NotionClient({
  auth: process.env.NOTION_TOKEN,
});

interface Props {
  resume: ResumeItem[];
}

interface ResumeItem {
  id: string;
  page: ListBlockChildrenResponse;
  name: string;
  type: "Text Block" | "Study" | "Work Experience" | "Project";
  order: number;
  date: {
    start: string;
    end: string | null;
  };
  company: string;
  properties: any;
}

export const NotionPageRenderer: FC<{ page: ListBlockChildrenResponse }> = ({
  page,
}) => {
  return (
    <div>
      {page.results.map((block) => {
        switch (block.type) {
          case "paragraph": {
            return (
              <p key={block.id}>
                {block.paragraph.text.map((t) =>
                  t.href ? (
                    <a href={t.href} target="_blank" rel="noreferrer">
                      {t.plain_text}
                    </a>
                  ) : (
                    t.plain_text
                  )
                )}
              </p>
            );
          }

          default: {
            return null;
          }
        }
      })}
    </div>
  );
};

const Home: NextPage<Props> = ({ resume }) => {
  return (
    <>
      <Head>
        <title>ewgenius</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Evgenii Khramkov personal page" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className="container mx-auto min-h-screen flex flex-col items-center justify-center content-center">
        <div className="mx-4 md:mx-0">
          <div className="mt-8 flex flex-row flex-grow">
            <Image
              src="/images/avatar.png"
              width={128}
              height={128}
              alt="logo"
            />
          </div>

          <div className="prose mt-8">
            {resume.map((item) => {
              switch (item.type) {
                case "Work Experience": {
                  return (
                    <div key={item.id} className="mb-8">
                      <div>
                        <b>{item.name}</b> at <b>{item.company}</b>
                      </div>
                      <div className="text-xs text-gray-400">
                        {item.date.start}
                        {item.date.end && <> - {item.date.end}</>}
                      </div>
                    </div>
                  );
                }

                case "Text Block":
                default: {
                  return (
                    <div key={item.id} className="mb-8">
                      <NotionPageRenderer page={item.page} />
                    </div>
                  );
                }
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

interface PropertyType {
  select: {
    name: "Study";
  };
}

interface PropertyNumber {
  number: number;
}

interface PropertyTitle {
  title: {
    text: {
      content: string;
    };
  }[];
}

interface PropertyDate {
  date: {
    start: string;
    end: string | null;
  };
}

interface PropertyRichText {
  rich_text: {
    plain_text: string;
  }[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_PAGE_ID as string,
  });

  const resume = (
    await Promise.all(
      results.map(async ({ id, properties }) => {
        const type = (properties.Type as PropertyType).select.name;
        const order = (properties.Order as PropertyNumber).number || 0;
        const name =
          (properties.Name as PropertyTitle).title[0].text.content || "";
        const company =
          (properties.Company as PropertyRichText).rich_text[0]?.plain_text ||
          "";
        const date = (properties.Date as PropertyDate).date;
        const page = await notion.blocks.children.list({ block_id: id });
        return {
          id,
          page,
          name,
          type,
          order,
          date,
          company,
          properties,
        };
      })
    )
  ).sort((a, b) => a.order - b.order);

  return {
    props: {
      resume,
    },
  };
};

export default Home;
