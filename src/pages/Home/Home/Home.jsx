import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Category from "./Category";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Food Palace | Home</title>
      </Helmet>
      <Banner />
      <Category/>
    </div>
  );
};

export default Home;
