import React from "react";
import { CiEdit } from "react-icons/ci";
import { FaHome, FaUsers } from "react-icons/fa";
import { IoAddCircleSharp } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex text-black">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/users">
              <FaUsers />
              User info
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/AddProducts">
              <IoAddCircleSharp />
              Add Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/AllProducts">
              <IoAddCircleSharp />
              All Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/EditProduct">
              <CiEdit />
              Edit Product
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8 bg-white">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
