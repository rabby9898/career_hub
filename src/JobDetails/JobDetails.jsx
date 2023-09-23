import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveApplicantId } from "../Utilities/LoacalStorage";
const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((job) => job.id == id);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
    salary,
    job_title,
  } = job;

  const notifyApply = () => {
    saveApplicantId(id);
    toast("You have applied Successfully");
  };
  return (
    <div className="px-4 md:px-0">
      <div>
        <div className="hero h-[30vh] bg-[#F9F9FF]">
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-black text-4xl font-bold">
                Job Details
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="grid col-span-1 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 my-12">
        <div className="md:col-span-2 lg:col-span-3">
          <p className=" my-4">
            <span className="font-bold">Job Description:</span>

            {job_description}
          </p>
          <p className=" my-4">
            <span className="font-bold">Job Responsibility:</span>

            {job_responsibility}
          </p>
          <p className=" my-4">
            <span className="font-bold">Educational:</span>
            <br />
            <br />
            {educational_requirements}
            <br />
          </p>
          <p className=" my-4">
            <span className="font-bold">Experience:</span>
            <br />
            <br />
            {experiences}
            <br />
          </p>
        </div>

        <div className="md:col-span-2 lg:col-span-1">
          <div className="p-5 border bg-[#d9d1f3] rounded-lg">
            <h4 className="text-xl text-black font-semibold mb-5">
              Job Details
            </h4>
            <div>
              <hr className="bg-[#6865F2]"></hr>
            </div>
            <p className=" my-4">
              <span className="font-bold">Salary:</span> {salary}
            </p>
            <p className=" my-4">
              <span className="font-bold">Job Title:</span> {job_title}
            </p>

            <h4 className="text-xl text-black font-semibold mb-5">
              Contact Information
            </h4>
            <hr />
            <p className=" my-4">
              <span className="font-bold">Phone:</span>
              {contact_information.phone}
            </p>
            <p className=" my-4">
              <span className="font-bold">Email:</span>
              {contact_information.email}
            </p>
            <p className=" my-4">
              <span className="font-bold">Address:</span>
              {contact_information.address}
            </p>
          </div>

          <button
            className="w-full text-white border rounded-lg py-2 bg-gradient-to-r from-indigo-500  to-purple-500 my-5"
            onClick={notifyApply}
          >
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
