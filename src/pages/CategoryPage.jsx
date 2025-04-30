import React from "react";
import { useParams } from "react-router";

const CategoryPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>CategoryPage {id}</h1>
    </div>
  );
};

export default CategoryPage;
