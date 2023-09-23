const Category = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    <div>
      <div>
        <div className="card w-full bg-base-100 shadow-xl my-5 py-6">
          <div className="p-3">
            <img className="w-16 mx-4" src={logo} alt="Shoes" />
          </div>
          <div className="card-body">
            <h2 className="card-title">{category_name}</h2>
            <p>{availability}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
