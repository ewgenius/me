import { GetStaticProps } from "next";
import { format } from "date-fns";
import { Briefcase } from "react-feather";
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
        <div
          className="job-details job-description"
          dangerouslySetInnerHTML={{ __html: job.description.join("<br />") }}
        />
      )}
      <div className="tags">
        {job.tags && job.tags.map((tag) => <div className="tag">{tag}</div>)}
      </div>
    </div>
  );
};

export default function Resume(props: ResumeProps) {
  return (
    <Layout title="Resume">
      <section>
        <h3>About me</h3>
        <p>My name is Evgeniy Khramkov</p>
        <p>
          I'm software developer with 7+ years experience in backend and
          frontend development
        </p>
      </section>

      <section>
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
          description: ["HTML/CSS markup"],
          startDate: formatJobDate(new Date("Apr 01, 2011")),
          endDate: formatJobDate(new Date("Aug 31, 2011")),
          tags: ["css", "html", "js"],
        },
        "2": {
          id: 2,
          title: "junior web-developer",
          company: "Media Plus",
          description: ["developing 3D/2D photos slider effects"],
          startDate: formatJobDate(new Date("Jul 01, 2013")),
          endDate: formatJobDate(new Date("Aug 31, 2013")),
          tags: ["css", "js", "webgl"],
        },
        "3": {
          id: 3,
          title: "web-developer",
          company: "Yellow Pages Telecom",
          description: [
            "call service CRM development (python/django)",
            "internal sites",
          ],
          startDate: formatJobDate(new Date("Oct 01, 2013")),
          endDate: formatJobDate(new Date("Apr 01, 2014")),
          tags: ["django", "js", "postgresql", "python"],
        },
        "4": {
          id: 4,
          title: "web-developer",
          company: "DigitalBox",
          description: [
            "frontend development:",
            "- building admin and internal interfaces for different services.",
            "- common stack: React.js, Redux | Mobx, Webpack, Typescript | ES2015, SCSS",
            "",
            "backend: ",
            "- building simple services and tools",
            "- common stack: node.js (express.js, keystone, typescript)",
          ],
          startDate: formatJobDate(new Date("May 01, 2014")),
          endDate: formatJobDate(new Date("Apr 01, 2017")),
          tags: ["angular.js", "node.js", "react.js", "typescript"],
        },
        "5": {
          id: 5,
          title: "software engineer",
          company: "Akvelon - App Center (vendor)",
          description: [
            `full-stack development of App Center <a href="https://appcenter.ms" target="__blank">https://appcenter.ms</a>`,
          ],
          startDate: formatJobDate(new Date("Apr 10, 2017")),
          endDate: formatJobDate(new Date("Jan 14, 2018")),
          tags: ["CI/CD", "node.js", "react.js", "typescript"],
        },
        "6": {
          id: 6,
          title: "software engineer 2",
          company: "Microsoft (Rus) - App Center",
          description: [
            `full-stack development of App Center <a href="https://appcenter.ms" target="__blank">https://appcenter.ms</a>`,
          ],
          startDate: formatJobDate(new Date("Jan 15, 2018")),
          endDate: formatJobDate(new Date("May 19, 2019")),
          tags: ["CI/CD", "node.js", "react.js", "typescript"],
        },
        "7": {
          id: 7,
          title: "software engineer 2",
          company: "Microsoft (US) - App Center",
          description: [
            `full-stack development of App Center <a href="https://appcenter.ms" target="__blank">https://appcenter.ms</a>`,
          ],
          startDate: formatJobDate(new Date("May 20, 2019")),
          endDate: null,
          tags: ["CI/CD", "node.js", "react.js", "typescript", ".NET"],
        },
      },
    },
  };
};
