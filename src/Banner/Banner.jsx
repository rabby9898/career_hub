import userImage from "../assets/images/user.png";
const Banner = () => {
  return (
    <div>
      <div className="hero h-[60vh] px-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={userImage} className="max-w-sm h-max" />
          <div>
            <h1 className="text-5xl font-bold">
              One Step Closer To Your <span>Dream Job</span>
            </h1>
            <p className="py-6">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn btn-primary text-white hover:border-0 bg-gradient-to-r from-indigo-500  to-purple-500 my-5">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
