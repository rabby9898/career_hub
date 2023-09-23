import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = ({ children }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/rabby9898/career_hub/main/public/categories.json"
    )
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <>
      <div className="px-4 my-10">{children}</div>
      <div className="grid grid-cols-1 md:grid-cols-3 px-4 gap-2 md:gap-5">
        {category.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </>
  );
};

export default CategoryList;
