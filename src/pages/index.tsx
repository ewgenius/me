import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Client as NotionClient } from "@notionhq/client";
import { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionPageRenderer } from "../components/NotionPageRenderer";

const notion = new NotionClient({
  auth: process.env.NOTION_TOKEN,
});

interface IconEmoji {
  type: "emoji";
  emoji: string;
}

interface AssetExternal {
  type: "external";
  external: {
    url: string;
  };
}

interface AssetFile {
  type: "file";
  file: {
    url: string;
    expiry_time: string;
  };
}

interface Props {
  icon: IconEmoji | AssetExternal | AssetFile | null;
  cover: AssetExternal | AssetFile | null;
  resume: ResumeItem[];
}

interface ResumeItem {
  id: string;
  icon: IconEmoji | AssetExternal | AssetFile | null;
  page: ListBlockChildrenResponse;
  name: string;
  type: "Text Block" | "Study" | "Work Experience" | "Project" | "Divider";
  order: number;
  date: {
    start: string;
    end: string | null;
  };
  company: string;
  location: string;
  properties: any;
}

const Home: NextPage<Props> = ({ icon, cover, resume }) => {
  return (
    <>
      <Head>
        <title>ewgenius</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Evgenii Khramkov personal page" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      {cover && (
        <div
          className="w-full h-[220px] -mb-16"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${
              cover.type === "external" ? cover.external.url : cover.file.url
            })`,
          }}
        />
      )}

      <div className="container mx-auto max-w-3xl px-4 2xl:px-0 min-h-screen flex flex-col items-center justify-center content-center">
        <div className="mt-8 w-full">
          {icon &&
            (icon.type === "emoji" ? (
              <span className="text-[48px] p-4">{icon.emoji}</span>
            ) : icon.type === "external" ? (
              <img
                src={icon.external.url}
                className="w-[128px] h-[128px]"
                alt="logo"
              />
            ) : icon.type === "file" ? (
              <img
                src={icon.file.url}
                className="w-[128px] h-[128px]"
                alt="logo"
              />
            ) : null)}
        </div>

        <div className="prose max-w-none w-full flex-grow">
          {resume.map((item) => {
            switch (item.type) {
              case "Work Experience": {
                return (
                  <div key={item.id} className="my-8">
                    <div className="flex flex-row items-center">
                      {item.icon &&
                        (item.icon.type === "emoji" ? (
                          <span className="mr-2">{item.icon.emoji}</span>
                        ) : item.icon.type === "external" ? (
                          <img
                            src={item.icon.external.url}
                            className="rounded-sm w-[18px] h-[18px] mr-2"
                            style={{ marginTop: 0, marginBottom: 0 }}
                            alt="logo"
                          />
                        ) : item.icon.type === "file" ? (
                          <img
                            src={item.icon.file.url}
                            className="rounded-sm w-[18px] h-[18px] mr-2"
                            style={{ marginTop: 0, marginBottom: 0 }}
                            alt="logo"
                          />
                        ) : null)}
                      <span>
                        <b>{item.name}</b> at <b>{item.company}</b>
                      </span>
                    </div>
                    <div className="text-sm text-gray-400">
                      <span className="mr-2">{item.location}</span>
                      {item.date.start}
                      {item.date.end && <> - {item.date.end}</>}
                    </div>
                    <div className="prose-sm">
                      <NotionPageRenderer page={item.page} />
                    </div>
                  </div>
                );
              }

              case "Divider": {
                return (
                  <div
                    key={item.id}
                    className="my-12 flex flex-row text-center justify-center items-center text-gray-400"
                  >
                    <span>...</span>
                  </div>
                );
              }

              case "Text Block":
              default: {
                return (
                  <div key={item.id} className="my-8">
                    <NotionPageRenderer page={item.page} />
                  </div>
                );
              }
            }
          })}
        </div>
      </div>
      <footer className="mt-16 pt-16 pb-8 border-t border-gray-200 flex flex-row items-center justify-center text-gray-400 text-xs">
        <p>2022 © ewgenius.me</p>
      </footer>
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
  const resumePage = await notion.databases.retrieve({
    database_id: process.env.NOTION_PAGE_ID as string,
  });

  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_PAGE_ID as string,
  });

  const resume = (
    await Promise.all(
      results.map(async ({ id, properties, icon }) => {
        const type = (properties.Type as PropertyType).select.name;
        const order = (properties.Order as PropertyNumber).number || 0;
        const name =
          (properties.Name as PropertyTitle).title[0]?.text.content || "";
        const company =
          (properties.Company as PropertyRichText).rich_text[0]?.plain_text ||
          "";
        const location =
          (properties.Location as PropertyRichText).rich_text[0]?.plain_text ||
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
          location,
          icon,
          properties,
        };
      })
    )
  ).sort((a, b) => a.order - b.order);

  return {
    props: {
      icon: resumePage.icon,
      cover: resumePage.cover,
      resume,
    },
    revalidate: 60,
  };
};

export default Home;
