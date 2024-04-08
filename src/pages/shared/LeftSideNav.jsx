import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h1 className="text-xl font-semibold text-[#403F3F]">All Category </h1>
      {categories.map((category) => (
        <Link className="block bg-[#E7E7E7] text-center text-xl font-semibold rounded-xl py-4 my-6" key={category.id}>
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNav;
