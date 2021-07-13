import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="top_header">
        <NavLink to="/profile">
          <div>
            <FaUserCircle />
            &nbsp; <span>Rajan Verma</span>
          </div>
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
