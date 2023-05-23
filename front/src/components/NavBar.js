import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logo from '../Pages/logo_img.png'
const NavBar = () => {
  const { auth, setAuth} = useContext(AuthContext);
  const user = JSON.parse(localStorage.getItem('currentUser'));
  return (
    <div className="navbar bg-secondary-content">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-secondary-content lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary-content rounded-box w-52"
          >
            <li>
              <Link smooth to="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/AboutUs" className="justify-between">
                About
              </Link>
            </li>
            <li>
              <Link to="/ContactUs">Contact</Link>
            </li>
          </ul>
        </div>
        <a className="mx-5 font-bold normal-case text-xl"><img width={100} src={logo}/></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li tabIndex={0}>
            <Link to="/AboutUs">About</Link>
          </li>
          <li>
            <Link to="/ContactUs">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
       { auth ?   

    <div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn m-1">Hi! {user !== undefined ? user.firstname : <></>}</label>
    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to="/List"  role="menuitem"> My List </Link></li>
      <li><Link to="/"  role="menuitem" onClick={() => {setAuth(false); localStorage.removeItem("currentUser");}}> Logout </Link></li>
    </ul>
  </div>

     
     : <Link to="/LogIn" className="btn">
          Login
        </Link>}
      </div>
    </div>
  );
};

export default NavBar;
