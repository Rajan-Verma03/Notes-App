import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaFileSignature,
  FaBook,
  FaPencilAlt,
  FaBlog,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import "react-pro-sidebar/dist/css/styles.css";
import "./css/Sidebar.css";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const [menuCollapse, setMenuCollapse] = useState(true);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  return (
    <>
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <p>{menuCollapse ? "logo" : " logo text"}</p>
            </div>

            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<FaBook />}>
                <NavLink to="/" exact activeClassName="active">
                  Subjects
                </NavLink>
              </MenuItem>
              <MenuItem icon={<FaPencilAlt />}>
                <NavLink to="/queries">Queries</NavLink>
              </MenuItem>
              <MenuItem icon={<FaFileSignature />}>
                <NavLink to="/exams">Exams</NavLink>
              </MenuItem>
              <MenuItem icon={<FaBlog />}>
                <NavLink to="/blogs">Blogs</NavLink>
              </MenuItem>
              <MenuItem icon={<FaUser />}>
                <NavLink to="/profile">Profile</NavLink>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FaSignOutAlt />}>
                <NavLink to="/sign-in">Logout</NavLink>
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;
