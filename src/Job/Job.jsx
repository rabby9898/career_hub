import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;

  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="mx-9 mt-8">
          <img src={logo} alt="company-logo" />
        </div>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <h5 className="my-4">{company_name}</h5>
          <div>
            <button className="border border-black rounded-md bg-transparent px-4 py-1 mr-4">
              {remote_or_onsite}
            </button>
            <button className="border border-black rounded-md bg-transparent px-4 py-1 inline">
              {job_type}
            </button>
          </div>
          <div className="w-[70%] my-4 flex">
            <p className="text-lg text-[#757575] flex items-center gap-2">
              {" "}
              <MdLocationOn />
              {location}
            </p>

            <p className="text-lg text-[#757575] flex items-center gap-2">
              <AiOutlineDollarCircle />
              {salary}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
