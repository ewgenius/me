import Airtable, { Table, FieldSet, Attachment } from "airtable";
import { GetStaticProps } from "next";
import { Briefcase } from "react-feather";
import { Layout } from "@components/Layout";
import { JobCard } from "@components/JobCard";
import { Dictionary } from "@data/dictionary";
import { Job } from "@data/jobs";
import { getLangStaticPaths } from "utils";

// @ts-ignore
import ResumeAboutRu from "@content/ru/resume-about.mdx";
// @ts-ignore
import ResumeAboutEn from "@content/en/resume-about.mdx";
import { useLocale } from "utils/useLocale";

export interface ResumeProps {
  jobs: Dictionary<Job>;
}

export default function Resume(props: ResumeProps) {
  const { lang } = useLocale();
  return (
    <Layout title="Resume">
      <section>
        <h3>About me</h3>
        {lang === "ru" ? <ResumeAboutRu /> : <ResumeAboutEn />}
      </section>

      <section>
        <h3>
          <Briefcase size={20} />
          Work experience
        </h3>
        {Object.values(props.jobs)
          .sort((j1, j2) => j2.id - j1.id)
          .map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<ResumeProps> = async () => {
  const jobsTable = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
  }).base(process.env.AIRTABLE_DB_ID)(
    process.env.AIRTABLE_TABLE_ORDERS
  ) as Table<Job>;

  const jobs = await jobsTable.select().all();

  return {
    props: {
      jobs: jobs
        .map((job) => {
          const jobSerialized: Job = {
            id: job.fields.id,
            name: job.fields.name,
            company: job.fields.company,
            description: job.fields.description,
            startDate: job.fields.startDate,
            tags: job.fields.tags,
          };

          if (job.fields.endDate) {
            jobSerialized.endDate = job.fields.endDate;
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

export const getStaticPaths = getLangStaticPaths;
