import React, { useState, useEffect, useRef, useContext } from "react";
import { LanguageContext } from "../home/LanguageContext";
import { Translation } from "../../Translation";

import "../../styles/sidebar.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import RoofingOutlinedIcon from "@mui/icons-material/RoofingOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";
import img1 from "../../assets/img/slide.jpg";

import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { language } = useContext(LanguageContext);


  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const location = useLocation();
  return (
    <>
      <button className="btn-toggle" onClick={toggleSidebar}>
        {isOpen ? < CloseIcon/> : <MenuOpenIcon />}
      </button>
      <aside className={`sidebar   ${isOpen ? "open" : ""}`}>
        <button
          onClick={toggleSidebar}
          className="sidebar-toggle material-symbols-outlined"
        >
          <KeyboardArrowRightIcon />
        </button>

        <div className="sidebar-header">
          <div className="img-header">
            <img src={img1} alt="" />
          </div>

          <span>Nombre Apellido</span>
        </div>

        <div className="sidebar-content">
          <nav>
            <ul>
              <li className="menu-header">
                <span className="titulo-head">{Translation[language].sidebarUserTitle1}</span>
              </li>
              <li className={`menu-item ${location.pathname === '/user/dashboard' ? 'active' : ''}`}>
                <Link to="/user/dashboard">
                  <span className="menu-icon">
                    <RoofingOutlinedIcon />
                  </span>
                  <span className="menu-title">{Translation[language].sidebarUserItem1}</span>
                </Link>
              </li>
              <li className="menu-header">
                <span className="titulo-head">{Translation[language].sidebarUserTitle2}</span>
              </li>

              <li className={`menu-item ${location.pathname === '/user/courses' ? 'active' : ''}`}>
                <Link to="/user/courses" >
                  <span className="menu-icon">
                    <ImportContactsOutlinedIcon />
                  </span>
                  <span className="menu-title">{Translation[language].sidebarUserItem2}</span>
                </Link>
              </li>

              <li className="menu-item ">
                <Link to="/">
                  <span className="menu-icon">
                    <LogoutOutlinedIcon />
                  </span>
                  <span className="menu-title">{Translation[language].sidebarUserItem3}</span>
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
