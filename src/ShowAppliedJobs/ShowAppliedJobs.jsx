import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const ShowAppliedJobs = ({ job }) => {
  const {
    id,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
    logo,
  } = job;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl grid grid-cols-4 my-5 items-center">
        <figure className="col-span-1">
          <img src={logo} alt="company-logo" />
        </figure>
        <div className="col-span-2">
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
        <div className="col-span-1">
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary text-white hover:border-0 bg-gradient-to-r from-indigo-500  to-purple-500 my-5">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowAppliedJobs;
