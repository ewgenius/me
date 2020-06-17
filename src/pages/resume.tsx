import { GetStaticProps } from "next";
import { format } from "date-fns";
import { Briefcase, BookOpen, ArrowLeftCircle } from "react-feather";
import { Layout } from "components/Layout";

export type Dictionary<T = any> = { [id: string]: T };

export interface Job {
  id: number;
  title: string;
  company: string;
  description: string[];
  startDate: string;
  endDate?: string;
  tags?: string[];
}

export interface ResumeProps {
  jobs: Dictionary<Job>;
}

export const Job = ({ job }: { job: Job }) => {
  return (
    <div className="job" key={job.id}>
      <b>{job.title}</b>
      <p className="job-details job-company">{job.company}</p>
      <p className="job-details job-date">
        {job.startDate} - {job.endDate || "now"}
      </p>
      {job.description && (
        <div className="job-details job-description">
          {job.description.map((line) => (
            <p>{line}</p>
          ))}
        </div>
      )}
      <div className="tags">
        {job.tags && job.tags.map((tag) => <div className="tag">{tag}</div>)}
      </div>
    </div>
  );
};

export default function Resume(props: ResumeProps) {
  return (
    <Layout>
      <h1>Resume</h1>
      <section className="resume-section">
        <h3>About me</h3>
        <p>My name is Evgeniy Khramkov</p>
        <p>
          I'm software developer with 7+ years experience in backend and
          frontend development
        </p>
      </section>

      <section className="resume-section">
        <h3>
          <Briefcase size={20} />
          Work experience
        </h3>
        {Object.values(props.jobs)
          .sort((j1, j2) => j2.id - j1.id)
          .map((job) => (
            <Job key={job.id} job={job} />
          ))}
      </section>

      <section className="resume-section">
        <h3>
          <BookOpen size={20} />
          Study
        </h3>
      </section>
    </Layout>
  );
}

function formatJobDate(date: Date) {
  return format(date, "MM/yyyy");
}

export const getStaticProps: GetStaticProps<ResumeProps> = async () => {
  return {
    props: {
      jobs: {
        "1": {
          id: 1,
          title: "junior web-developer",
          company: "Brandmaker",
          description: [""],
          startDate: formatJobDate(new Date("Apr 01, 2011")),
          endDate: formatJobDate(new Date("Aug 31, 2011")),
          tags: ["css", "html", "js"],
        },
        "2": {
          id: 2,
          title: "junior web-developer",
          company: "Media Plus",
          description: [""],
          startDate: formatJobDate(new Date("Jul 01, 2013")),
          endDate: formatJobDate(new Date("Aug 31, 2013")),
          tags: ["css", "js", "webgl"],
        },
        "3": {
          id: 3,
          title: "web-developer",
          company: "Yellow Pages Telecom",
          description: [""],
          startDate: formatJobDate(new Date("Oct 01, 2013")),
          endDate: formatJobDate(new Date("Apr 01, 2014")),
          tags: ["django", "js", "postgresql", "python"],
        },
        "4": {
          id: 4,
          title: "web-developer",
          company: "DigitalBox",
          description: [""],
          startDate: formatJobDate(new Date("May 01, 2014")),
          endDate: formatJobDate(new Date("Apr 01, 2017")),
          tags: ["angular.js", "node.js", "react.js", "typescript"],
        },
        "5": {
          id: 5,
          title: "software engineer",
          company: "Akvelon",
          description: [""],
          startDate: formatJobDate(new Date("Apr 10, 2017")),
          endDate: formatJobDate(new Date("Jan 14, 2018")),
          tags: ["CI/CD", "node.js", "react.js", "typescript"],
        },
        "6": {
          id: 6,
          title: "software engineer 2",
          company: "Microsoft (Rus)",
          description: [""],
          startDate: formatJobDate(new Date("Jan 15, 2018")),
          endDate: formatJobDate(new Date("May 19, 2019")),
          tags: ["CI/CD", "node.js", "react.js", "typescript"],
        },
        "7": {
          id: 7,
          title: "software engineer 2",
          company: "Microsoft (US)",
          description: [
            "full-stack development of App Center (Build and Diagnostics services)",
            "Frontend - worked on UI for Build and Diagnostics Search services",
          ],
          startDate: formatJobDate(new Date("May 20, 2019")),
          endDate: null,
          tags: ["CI/CD", "node.js", "react.js", "typescript"],
        },
      },
    },
  };
};
