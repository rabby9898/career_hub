import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeatureJob from "../FeatureJob/FeatureJob";

const Home = () => {
  return (
    <div>
      <div className=" bg-[#FAF8FF]">
        <Banner></Banner>
      </div>
      <div>
        <CategoryList>
          <div className="md:text-center">
            <h1 className="text-5xl font-extrabold">Job Category List</h1>
            <p className="text-base text-[#757575] font-medium my-5">
              Explore thousands of job opportunities with all the information
              you need. Its your future
            </p>
          </div>
        </CategoryList>
      </div>
      <div>
        <FeatureJob>
          <div className="text-center">
            <h1 className="text-5xl font-extrabold">Featured Jobs</h1>
            <p className="text-base text-[#757575] font-medium my-5">
              Explore thousands of job opportunities with all the information
              you need. Its your future
            </p>
          </div>
        </FeatureJob>
      </div>
    </div>
  );
};

export default Home;
