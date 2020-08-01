import { GetStaticProps } from "next";
import { Briefcase } from "react-feather";
import { Layout } from "components/Layout";
import { Dictionary } from "data/dictionary";
import { Job, jobs } from "data/jobs";

// @ts-ignore
import ResumeAbout from "../content/resume-about.mdx";

export interface ResumeProps {
  jobs: Dictionary<Job>;
}

export const JobCard = ({ job }: { job: Job }) => {
  return (
    <div className="job" key={job.id}>
      <b>{job.title}</b>
      <p className="job-details job-company">{job.company}</p>
      <p className="job-details job-date">
        {job.startDate} - {job.endDate || "now"}
      </p>
      {job.description && (
        <div
          className="job-details job-description"
          dangerouslySetInnerHTML={{ __html: job.description.join("<br />") }}
        />
      )}
      <div className="tags">
        {job.tags &&
          job.tags.map((tag) => (
            <div key={`${job.id}-${tag}`} className="tag">
              {tag}
            </div>
          ))}
      </div>
    </div>
  );
};

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
