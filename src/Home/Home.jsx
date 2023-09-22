import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeatureJob from "../FeatureJob/FeatureJob";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CategoryList>
        <div className="text-center">
          <h1 className="text-5xl font-extrabold">Job Category List</h1>
          <p className="text-base text-[#757575] font-medium my-5">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
      </CategoryList>
      <FeatureJob>
        <div className="text-center">
          <h1 className="text-5xl font-extrabold">Featured Jobs</h1>
          <p className="text-base text-[#757575] font-medium my-5">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
      </FeatureJob>
    </div>
  );
};

export default Home;
