import React from "react";

// eslint-disable-next-line react/prop-types
const ItemCard = ({ singleItem }) => {
  const { description, discount, image, price, chef_name, item } = singleItem;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <h1 className="bg-black text-white px-2 absolute right-16 top-14 rounded">
          $ {price}
        </h1>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{item}</h2>
          <p>Chef:{chef_name}</p>
          <div className="card-actions">
            <button className="btn btn-outline uppercase text-white border-0 border-b-2 mt-4">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
