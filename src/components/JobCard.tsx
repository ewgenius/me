import { Job } from "@data/jobs";
import { useLocale } from "utils/useLocale";

export const JobCard = ({ job }: { job: Job }) => {
  const { lang } = useLocale();
  const description =
    (lang === "ru" && job.description_ru) || job.description_en;
  return (
    <div className="mb-4 pb-1 pl-4 border-l-2 border-gray-500" key={job.id}>
      <b className="text-xl">{job.name}</b>
      <p className="text-sm text-gray-700 font-bold">{job.company}</p>
      <p className="text-sm text-gray-700">
        {job.startDate} - {job.endDate || "now"}
      </p>
      {description && (
        <div
          className="mt-1 prose prose-md"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
      <div className="my-2 overflow-auto">
        {job.tags &&
          job.tags.map((tag) => (
            <div
              key={`${job.id}-${tag}`}
              className="float-left text-xs text-white bg-black mr-1 mt-1 py-1 px-2 rounded-lg"
            >
              {tag}
            </div>
          ))}
      </div>
    </div>
  );
};
