import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = ({ children }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("../../public/categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <>
      <div className="my-10">{children}</div>
      <div className="grid grid-cols-3 gap-5">
        {category.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </>
  );
};

export default CategoryList;
