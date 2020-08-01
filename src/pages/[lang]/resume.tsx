import { GetStaticProps } from "next";
import { Briefcase } from "react-feather";
import { Layout } from "@components/Layout";
import { JobCard } from "@components/JobCard";
import { Dictionary } from "@data/dictionary";
import { Job, jobs } from "@data/jobs";
import { getLangStaticPaths } from "utils";

// @ts-ignore
import ResumeAbout from "@content/resume-about.mdx";

export interface ResumeProps {
  jobs: Dictionary<Job>;
}

export default function Resume(props: ResumeProps) {
  return (
    <Layout title="Resume">
      <section>
        <h3>About me</h3>
        <ResumeAbout />
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
  return {
    props: {
      jobs,
    },
  };
};

export const getStaticPaths = getLangStaticPaths;
