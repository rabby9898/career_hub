import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeatureJob = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <>
      <div>{children}</div>
      <div>
        {jobs.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
    </>
  );
};

export default FeatureJob;
