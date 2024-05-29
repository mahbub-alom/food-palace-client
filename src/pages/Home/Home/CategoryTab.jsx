import React from "react";
import ItemCard from "./ItemCard";

// eslint-disable-next-line react/prop-types
const CategoryTab = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 gap-10">
      {items.map((item) => (
        <ItemCard key={item.id} singleItem={item}></ItemCard>
      ))}
    </div>
  );
};

export default CategoryTab;
