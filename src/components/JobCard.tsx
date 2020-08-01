import { Dictionary } from "@data/dictionary";
import { Job } from "@data/jobs";

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
