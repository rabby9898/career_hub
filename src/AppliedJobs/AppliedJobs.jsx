import { useEffect, useState } from "react";

import { getStoredJobId } from "../Utilities/LoacalStorage";

import ShowAppliedJobs from "../ShowAppliedJobs/ShowAppliedJobs";
import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  console.log(appliedJobs);
  useEffect(() => {
    const storedData = getStoredJobId();
    if (jobs.length) {
      const jobsApplied = [];
      for (const id of storedData) {
        const job = jobs.find((job) => job.id == id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
    }
  }, []);

  return (
    <div>
      <h1>Applied Jobs: {appliedJobs.length}</h1>

      <div className="my-5 gap-5">
        {appliedJobs.map((job) => (
          <ShowAppliedJobs key={job.id} job={job}></ShowAppliedJobs>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
