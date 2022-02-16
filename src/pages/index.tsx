import { Fragment } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import { Client as NotionClient } from "@notionhq/client";

// const notion = new NotionClient({
//   auth: process.env.NOTION_TOKEN,
// });

const links = [
  ["github.com/ewgenius", "https://github.com/ewgenius/"],
  ["linkedin.com/ewgenius", "https://www.linkedin.com/in/ewgenius/"],
  ["instagram.com/ewgeniux", "https://instagram.com/ewgeniux/"],
];

interface Job {
  description: any;
  company: any;
  published: any;
  type: any;
  icon: any;
  tags: any;
  interval: any;
  title: any;
}

interface Props {
  jobs: any[];
}

const Home: NextPage<Props> = ({ jobs }) => {
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
            <p>Hello!👋 I&apos;m Evgenii</p>
            <p>
              I&apos;m software developer, and currently I&apos;m working
              at&nbsp;
              <a
                href="https://www.pandadoc.com"
                target="_blank"
                rel="noreferrer"
              >
                PandaDoc
              </a>
            </p>
            <p>
              You can find me at&nbsp;
              {links.map(([title, link], i) => (
                <Fragment key={`contact-link-${i}`}>
                  <a href={link} target="_blank" rel="noreferrer">
                    {title}
                  </a>
                  {i === links.length - 1 ? null : i === links.length - 2 ? (
                    <> and </>
                  ) : (
                    <>, </>
                  )}
                </Fragment>
              ))}
              ,<br />
              or directly contact me at{" "}
              <a className="text-blue-400" href="mailto:ewgeniux@gmail.com">
                ewgeniux@gmail.com
              </a>{" "}
              and{" "}
              <a href="https://t.me/ewgenius" target="_blank" rel="noreferrer">
                t.me/ewgenius
              </a>
            </p>
          </div>

          <div className="my-16 flex-grow text-center">...</div>

          {/* <div className="mb-32">
            <div className="mb-4">
              <b>My work experience:</b>
            </div>

            <div>
              <ul>
                {jobs.map((job, i) => (
                  <li key={`job-${i}`}>
                    <div className="flex">
                      <div>{job.company}</div>
                      <div className="flex-grow" />
                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                        {job.startDate}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const { results } = await notion.databases.query({
//     database_id: "8225e42a4cec4e069fc23dfbd769c54d",
//   });

//   const jobs = results
//     .map((i) => {
//       const job = i.properties as any as Job;

//       return {
//         published: job.published.checkbox,
//         company: job.company.rich_text[0]?.plain_text,
//         title: job.title.title[0].plain_text,
//         startDate: job.interval.date?.start || null,
//         endDate: job.interval.date?.end || null,
//       };
//     })
//     .filter((i) => i.published);

//   console.log(jobs);

//   return {
//     props: {
//       jobs,
//     },
//   };
// };

export default Home;
