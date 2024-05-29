import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const {item,image,description,price,discount,category,chef_name}=data;

  useEffect(() => {
    axios.get(`http://localhost:3000/menu/${id}`).then((data) => {
      setData(data.data);
    });
  }, [id]);

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title"><span className="text-3xl">Item Name: </span>{item}</h2>
          <p><span className="text-xl">Details: </span>{description}</p>
          <p><span className="text-2xl font-bold">Price: </span>${price}</p>
          <p><span className="text-2xl font-bold">Chef: </span>{chef_name}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
