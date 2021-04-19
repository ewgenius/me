import Airtable from "airtable";
import { GetStaticProps } from "next";
import { Briefcase } from "react-feather";
import { Layout } from "@components/Layout";
import { JobCard } from "@components/JobCard";
import { getLocaleStaticPaths } from "../utils";
import { Job } from "@utils/job";

export type Dictionary<T = any> = { [id: string]: T };

// @ts-ignore
import ResumeAboutRu from "@content/ru/resume-about.mdx";
// @ts-ignore
import ResumeAboutEn from "@content/en/resume-about.mdx";
import { useLocale } from "@utils/useLocale";
import { PropsWithLocale } from "@utils/withLocale";

export type ResumeProps = PropsWithLocale<{
  jobs: Dictionary<Job>;
}>;

export default function Resume({ messages, jobs }: ResumeProps) {
  const { locale } = useLocale();
  return (
    <Layout title={messages["page.resume"]}>
      <section className="prose mb-4">
        <h3>About me</h3>
        {locale === "ru" ? <ResumeAboutRu /> : <ResumeAboutEn />}
      </section>

      <section className="py-4">
        <h3 className="flex items-center text-2xl font-bold mb-2">
          <Briefcase className="mr-2" size={24} />
          Work experience
        </h3>
        {Object.values(jobs)
          .sort((j1, j2) => j2.id - j1.id)
          .map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<ResumeProps> = async ({
  locale,
}) => {
  const messages = require(`../content/${locale}/messages.json`);

  const jobsTable = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
  }).base(process.env.AIRTABLE_DB_ID)(
    process.env.AIRTABLE_TABLE_ORDERS
  ) as Airtable.Table<Job>;

  const jobs = await jobsTable.select().all();

  return {
    props: {
      messages,
      jobs: jobs
        .map((job) => {
          const jobSerialized: Job = {
            id: job.fields.id,
            name: job.fields.name,
            company: job.fields.company,
            startDate: job.fields.startDate,
            tags: job.fields.tags,
          };

          if (job.fields.endDate) {
            jobSerialized.endDate = job.fields.endDate;
          }

          if (job.fields.description_en) {
            jobSerialized.description_en = job.fields.description_en;
          }

          if (job.fields.description_ru) {
            jobSerialized.description_ru = job.fields.description_ru;
          }

          return jobSerialized;
        })
        .reduce((dict, job) => {
          dict[job.id] = job;
          return dict;
        }, {}),
    },
  };
};

export const getStaticPaths = getLocaleStaticPaths;
