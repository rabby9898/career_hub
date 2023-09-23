import { useEffect, useState } from "react";
import { getStoredJobId } from "../Utilities/LoacalStorage";
import ShowAppliedJobs from "../ShowAppliedJobs/ShowAppliedJobs";
// import { useLoaderData } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";

const AppliedJobs = () => {
  // const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/rabby9898/career_hub/main/public/jobs.json"
    )
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const handleDisplayJobs = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedData = getStoredJobId();
    if (jobs.length > 0) {
      const jobsApplied = [];
      for (const id of storedData) {
        const job = jobs.find((job) => job.id == id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);

  return (
    <div>
      <div className="text-end">
        <details className="dropdown mb-10">
          <summary className="m-1 btn">
            Filter <AiOutlineDown />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleDisplayJobs("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleDisplayJobs("remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleDisplayJobs("onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="my-5 gap-5">
        {displayJobs.map((job) => (
          <ShowAppliedJobs key={job.id} job={job}></ShowAppliedJobs>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
