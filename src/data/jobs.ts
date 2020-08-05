import { format } from "date-fns";
import { Dictionary } from "./dictionary";
import { FieldSet } from "airtable";

export interface Job extends FieldSet {
  id: number;
  name: string;
  company: string;
  startDate: string;
  description_en?: string;
  description_ru?: string;
  endDate?: string;
  tags?: string[];
}

function formatJobDate(date: Date) {
  return format(date, "MM/yyyy");
}

export const jobs: Dictionary<Job> = {
  "1": {
    id: 1,
    name: "junior web-developer",
    company: "Brandmaker",
    // description: ["HTML/CSS markup"],
    startDate: formatJobDate(new Date("Apr 01, 2011")),
    endDate: formatJobDate(new Date("Aug 31, 2011")),
    tags: ["css", "html", "js"],
  },
  "2": {
    id: 2,
    name: "junior web-developer",
    company: "Media Plus",
    // description: ["developing 3D/2D photos slider effects"],
    startDate: formatJobDate(new Date("Jul 01, 2013")),
    endDate: formatJobDate(new Date("Aug 31, 2013")),
    tags: ["css", "js", "webgl"],
  },
  "3": {
    id: 3,
    name: "web-developer",
    company: "Yellow Pages Telecom",
    // description: [
    //   "call service CRM development (python/django)",
    //   "internal sites",
    // ],
    startDate: formatJobDate(new Date("Oct 01, 2013")),
    endDate: formatJobDate(new Date("Apr 01, 2014")),
    tags: ["django", "js", "postgresql", "python"],
  },
  "4": {
    id: 4,
    name: "web-developer",
    company: "DigitalBox",
    // description: [
    //   frontend development:",
    //   - building admin and internal interfaces for different services.",
    //   - common stack: React.js, Redux | Mobx, Webpack, Typescript | ES2015, SCSS",
    //   ",
    //   backend: ",
    //   - building simple services and tools",
    //   - common stack: node.js (express.js, keystone, typescript)",
    // ],
    startDate: formatJobDate(new Date("May 01, 2014")),
    endDate: formatJobDate(new Date("Apr 01, 2017")),
    tags: ["angular.js", "node.js", "react.js", "typescript"],
  },
  "5": {
    id: 5,
    name: "software engineer",
    company: "Akvelon - App Center (vendor)",
    // description: [
    //   `full-stack development of App Center <a href="https://appcenter.ms" target="__blank">https://appcenter.ms</a>`,
    // ],
    startDate: formatJobDate(new Date("Apr 10, 2017")),
    endDate: formatJobDate(new Date("Jan 14, 2018")),
    tags: ["CI/CD", "node.js", "react.js", "typescript"],
  },
  "6": {
    id: 6,
    name: "software engineer",
    company: "Microsoft (Rus) - App Center",
    // description: [
    //   `full-stack development of App Center <a href="https://appcenter.ms" target="__blank">https://appcenter.ms</a>`,
    // ],
    startDate: formatJobDate(new Date("Jan 15, 2018")),
    endDate: formatJobDate(new Date("May 19, 2019")),
    tags: ["CI/CD", "node.js", "react.js", "typescript"],
  },
  "7": {
    id: 7,
    name: "software engineer",
    company: "Microsoft (US) - App Center",
    // description: [
    //   `full-stack development of App Center <a href="https://appcenter.ms" target="__blank">https://appcenter.ms</a>`,
    // ],
    startDate: formatJobDate(new Date("May 20, 2019")),
    endDate: formatJobDate(new Date("Dec 31, 2019")),
    tags: ["CI/CD", "node.js", "react.js", "typescript", ".NET"],
  },
  "8": {
    id: 8,
    name: "software engineer",
    company: "Microsoft (US) - GitHub Collaborator",
    // description: [`GitHub Enterprise infrastructure development`],
    startDate: formatJobDate(new Date("Jan 1, 2020")),
    endDate: formatJobDate(new Date("Jun 30, 2020")),
    tags: ["bash", "ruby", "ruby on rails"],
  },
  "9": {
    id: 9,
    name: "software engineer",
    company: "GitHub",
    // description: [`GitHub Enterprise infrastructure development`],
    startDate: formatJobDate(new Date("Jul 1, 2020")),
    endDate: null,
    tags: ["bash", "ruby", "ruby on rails"],
  },
};
