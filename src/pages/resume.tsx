import { GetStaticProps } from "next";
import { Briefcase, BookOpen, Book } from "react-feather";
import { Layout } from "components/Layout";

export type Dictionary<T = any> = { [id: string]: T };

export interface Job {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  tags?: string[];
}

export interface ResumeProps {
  jobs: Dictionary<Job>;
}

export default function Resume(props: ResumeProps) {
  return (
    <Layout>
      <h1>Resume</h1>
      <section className="resume-section">
        <h3>About</h3>
        <p>My name is Evgeniy Khramkov</p>
      </section>

      <section className="resume-section">
        <h3>
          <Briefcase size={20} />
          Work experience
        </h3>
        <ul>
          {Object.values(props.jobs).map((job) => (
            <li key={job.id}>{job.title}</li>
          ))}
        </ul>
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

export const getStaticProps: GetStaticProps<ResumeProps> = async () => {
  return {
    props: {
      jobs: {
        "7": {
          id: "7",
          title: "software engineer 2",
          company: "Microsoft (US)",
          startDate: new Date("May 20, 2019").toString(),
          endDate: null,
          tags: ["CI/CD", "node.js", "react.js", "typescript"],
        },
        "6": {
          id: "6",
          title: "software engineer 2",
          company: "Microsoft (Rus)",
          startDate: new Date("Jan 15, 2018").toString(),
          endDate: new Date("May 19, 2019").toString(),
          tags: ["CI/CD", "node.js", "react.js", "typescript"],
        },
        "5": {
          id: "5",
          title: "software engineer",
          company: "Akvelon",
          startDate: new Date("Apr 10, 2017").toString(),
          endDate: new Date("Jan 14, 2018").toString(),
          tags: ["CI/CD", "node.js", "react.js", "typescript"],
        },
        "4": {
          id: "4",
          title: "web-developer",
          company: "DigitalBox",
          startDate: new Date("May 01, 2014").toString(),
          endDate: new Date("Apr 01, 2017").toString(),
          tags: ["angular.js", "node.js", "react.js", "typescript"],
        },
        "3": {
          id: "3",
          title: "web-developer",
          company: "Yellow Pages Telecom",
          startDate: new Date("Oct 01, 2013").toString(),
          endDate: new Date("Apr 01, 2014").toString(),
          tags: ["django", "js", "postgresql", "python"],
        },
        "2": {
          id: "2",
          title: "junior web-developer",
          company: "Media Plus",
          startDate: new Date("Jul 01, 2013").toString(),
          endDate: new Date("Aug 31, 2013").toString(),
          tags: ["css", "js", "webgl"],
        },
        "1": {
          id: "1",
          title: "junior web-developer",
          company: "Brandmaker",
          startDate: new Date("Apr 01, 2011").toString(),
          endDate: new Date("Aug 31, 2011").toString(),
          tags: ["css", "html", "js"],
        },
      },
    },
  };
};
