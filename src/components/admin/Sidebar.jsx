import React, { useState, useEffect, useRef, useContext } from "react";
import { LanguageContext } from "../home/LanguageContext";
import { Translation } from "../../Translation";

import "../../styles/sidebar.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import RoofingOutlinedIcon from "@mui/icons-material/RoofingOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";
import img1 from "../../assets/img/slide.jpg";

import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  // Access the language context
  const { language } = useContext(LanguageContext);

  // State to control the sidebar's open/close state
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the sidebar's open/close state
  const toggleSidebar = () => setIsOpen(!isOpen);

  // Get the current location using React Router's useLocation hook
  const location = useLocation();

  return (
    <>
      {/* Button to toggle the sidebar */}
      <button className="btn-toggle" onClick={toggleSidebar}>
        {isOpen ? <CloseIcon /> : <MenuOpenIcon />}
      </button>

      {/* Sidebar component */}
      <aside className={`sidebar   ${isOpen ? "open" : ""}`}>
        <button
          onClick={toggleSidebar}
          className="sidebar-toggle material-symbols-outlined"
        >
          <KeyboardArrowRightIcon />
        </button>

        {/* Sidebar header */}
        <div className="sidebar-header">
          <div className="img-header">
            <img src={img1} alt="" />
          </div>

          {/* Display the user's name */}
          {/* Display the user's name */}
          {/* Display the user's name */}
          <span>Nombre Apellido</span>
        </div>

        <div className="sidebar-content">
          <nav>
            <ul>
              <li className="menu-header">
                <span className="titulo-head">
                  {Translation[language].sidebarAdminTitle1}
                </span>
              </li>
              <li
                className={`menu-item ${
                  location.pathname === "/admin/dashboard" ? "active" : ""
                }`}
              >
                <Link to="/admin/dashboard">
                  <span className="menu-icon">
                    <RoofingOutlinedIcon />
                  </span>
                  <span className="menu-title">
                    {Translation[language].sidebarAdminItem1}
                  </span>
                </Link>
              </li>
              <li className="menu-header">
                <span className="titulo-head">
                  {Translation[language].sidebarAdminTitle2}
                </span>
              </li>

              <li
                className={`menu-item ${
                  location.pathname === "/admin/tools" ? "active" : ""
                }`}
              >
                <Link to="/admin/tools">
                  <span className="menu-icon">
                    <DashboardIcon />
                  </span>
                  <span className="menu-title">
                    {Translation[language].sidebarAdminItem2}
                  </span>
                </Link>
              </li>

              <li className="menu-item ">
                <Link to="/">
                  <span className="menu-icon">
                    <LogoutOutlinedIcon />
                  </span>
                  <span className="menu-title">
                    {Translation[language].sidebarAdminItem3}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
