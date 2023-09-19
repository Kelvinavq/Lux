import React, { useState, useEffect, useContext } from "react";
import { LenguageSelector } from "./LenguageSelector";
import { LanguageContext } from "../home/LanguageContext";
import { Translation } from "../../Translation";

import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/lux_logo.png";
import { Link } from "react-router-dom";

import "../../styles/navbar.css";

import AOS from "aos";
import aosConfig from "../../aosConfig";

export const NavBar = () => {
  const { language } = useContext(LanguageContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const dataCourses = [
    {
      title: Translation[language].courseTitleCoaching,
      link: "#coaching",
    },
    {
      title: Translation[language].courseTitleEnglish,
      link: "#english",
    },
    {
      title: Translation[language].courseTitleDropshipping,
      link: "#dropshipping",
    },
    {
      title: Translation[language].courseTitleOratory,
      link: "#oratory",
    },
    {
      title: Translation[language].courseTitleTrading,
      link: "#trading",
    },
    {
      title: Translation[language].courseTitleMarketing,
      link: "#marketing",
    },
    {
      title: Translation[language].courseTitleEcommerce,
      link: "#ecommerce",
    },
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    AOS.init(aosConfig);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navContainer = document.querySelector(".navContainer");
      if (!navContainer.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const handleItemClick = () => {
    setShowDropdown(false);
    if (document.querySelector(".cont-navbar").classList.contains("open")) {
      document.querySelector(".cont-navbar").classList.remove("open");
    }
  };

  return (
    <>
      <div
        className={`cont-navbar ${isScrolled ? "scrolled" : ""} ${
          isOpen ? "open" : ""
        }`}
      >
        <div className="navContainer" data-aos="fade-down">
          <Link to="/" className="logo">
            <img src={logo} alt="lux-logo" />
          </Link>

          <nav className="navbar">
            <button className="close" onClick={handleClose}>
              <CloseIcon />
            </button>
            <ul className="nav-links">
              <Link to="/" className="logo">
                <img src={logo} alt="lux-logo" />
              </Link>
              <li className="item" onClick={handleItemClick}>
                <a href="#home">{Translation[language].navLink1}</a>
              </li>
              <li className="dropdownMenu " onClick={toggleDropdown}>
                <a href="#courses">{Translation[language].navLink2}</a>
                <ul
                  className={`dropdown-content ${showDropdown ? "active" : ""}`}
                >
                  {dataCourses.map((course, index) => (
                    <li key={index} onClick={handleItemClick}>
                      <a href={course.link}>{course.title}</a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="item" onClick={handleItemClick}>
                <a href="#memberships">{Translation[language].navLink3}</a>
              </li>

              <div className="btn-login nav">
                <button>
                  <Link to={"https://office.luxinternational.us/auth/login"}>{Translation[language].navButton}</Link>
                </button>
              </div>
            </ul>

            <div className="btn-login">
              <button>
                <Link to={"https://office.luxinternational.us/auth/login"}>{Translation[language].navButton}</Link>
              </button>
            </div>
            <LenguageSelector />
          </nav>

          <div className="btn-hamburger">
            <LenguageSelector />

            <button onClick={handleToggle}>
              <MenuOpenIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
