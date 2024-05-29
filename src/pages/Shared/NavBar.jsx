import React from "react";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const NavBar = () => {
  const { users, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User LogOut successfully",
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .catch((error) => {
        console.log(error.message);
      });
  };
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      {users ? (
        <li>
          <Link onClick={handleLogOut}>LogOut</Link>
        </li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  //   navbar fixed z-10 bg-opacity-30 text-white max-w-screen-xl bg-base-100
  return (
    <div className="navbar fixed z-10 bg-opacity-50 max-w-screen-xl bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="w-24" href="/">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <div className="avatar">
          <div className="w-14 rounded-full">
            {users && <img title={users?.displayName} src={users?.photoURL} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
