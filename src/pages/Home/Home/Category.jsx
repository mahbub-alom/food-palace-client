import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import CategoryTab from "./CategoryTab";

const Category = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    // fetch("http://localhost:3000/menu")
    // .then(res=>res.json())
    // .then(data=>console.log(data))
    axios.get("http://localhost:3000/menu").then((data) => {
      setMenu(data.data);
    });
  }, []);
  const categories = ["Appetizer", "Main Course", "Dessert", "Beverage"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const Appetizer = menu.filter((item) => item.category === "Appetizer");
  const Main_Course = menu.filter((item) => item.category === "Main Course");
  const Dessert = menu.filter((item) => item.category === "Dessert");
  const Beverage = menu.filter((item) => item.category === "Beverage");
  const Pizza = menu.filter((item) => item.category === "Pizza");

  return (
    <div>
      <Helmet>
        <title>Food Palace | Category</title>
      </Helmet>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Appetizer</Tab>
          <Tab>Main_Course</Tab>
          <Tab>Dessert</Tab>
          <Tab>Beverage</Tab>
          <Tab>Pizza</Tab>
        </TabList>
        <TabPanel>
          <CategoryTab items={Appetizer}></CategoryTab>
        </TabPanel>
        <TabPanel>
          <CategoryTab items={Main_Course}></CategoryTab>
        </TabPanel>
        <TabPanel>
          <CategoryTab items={Dessert}></CategoryTab>
        </TabPanel>
        <TabPanel>
          <CategoryTab items={Beverage}></CategoryTab>
        </TabPanel>
        <TabPanel>
          <CategoryTab items={Pizza}></CategoryTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
