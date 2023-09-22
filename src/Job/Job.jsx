const Job = ({ job }) => {
  const { logo, job_title } = job;
  return (
    <div>
      <img src={logo}></img>
      <h1>Title: {job_title}</h1>
    </div>
  );
};

export default Job;
