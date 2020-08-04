import { Job } from "@data/jobs";
import { useLocale } from "utils/useLocale";

export const JobCard = ({ job }: { job: Job }) => {
  const { lang } = useLocale();
  const description =
    (lang === "ru" && job.description_ru) || job.description_en;
  return (
    <div className="job" key={job.id}>
      <b>{job.name}</b>
      <p className="job-details job-company">{job.company}</p>
      <p className="job-details job-date">
        {job.startDate} - {job.endDate || "now"}
      </p>
      {description && (
        <div
          className="job-details job-description"
          dangerouslySetInnerHTML={{ __html: description }}
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
