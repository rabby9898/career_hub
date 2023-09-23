import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeatureJob = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [cards, setCards] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <>
      <div>{children}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-10 p-5">
        {jobs.slice(0, cards).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={cards === jobs.length && "hidden"}>
        <button
          onClick={() => setCards(jobs.length)}
          className="btn btn-primary mx-4 my-6 md:mx-5"
        >
          Show All
        </button>
      </div>
    </>
  );
};

export default FeatureJob;
