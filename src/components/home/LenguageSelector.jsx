import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "./LanguageContext";
import { Translation } from "../../Translation";

import espanaIcon from "../../assets/icons/espana.webp";
import estadosUnidosIcon from "../../assets/icons/estados-unidos.webp";
import franciaIcon from "../../assets/icons/francia.webp";

// Mapping of languages to flag icons
const languageFlagMap = {
  es: espanaIcon,
  en: estadosUnidosIcon,
  fr: franciaIcon,
};

/**
 * The LanguageSelector component provides a language selection dropdown
 * and a login button with language-specific text.
 */

export const LenguageSelector = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("es");

  // Toggle the language dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  // Refs for DOM elements
  const buttonRef = React.createRef();
  const chevronRef = React.createRef();
  const menuRef = React.createRef();

  // Update the dropdown menu position when it's open or closed
  React.useEffect(() => {
    const button = buttonRef.current;
    const chevron = chevronRef.current;
    const menu = menuRef.current;

    if (button && chevron && menu) {
      const buttonRect = button.getBoundingClientRect();
      const chevronRect = chevron.getBoundingClientRect();
      const menuRight = buttonRect.right - chevronRect.right;
      const menuTop = chevronRect.top - buttonRect.top;

      if (dropdownOpen) {
        menu.style.top = `${buttonRect.height + 10}px`;
        menu.style.right = 0;
      } else {
        menu.style.top = `${menuTop}px`;
        menu.style.right = `${menuRight}px`;
      }
    }
  }, [dropdownOpen]);

  // Get the language context
  const { language, setLanguage } = useContext(LanguageContext);

  // Handle language change
  const handleLanguageChange = (newLanguage) => {
    // Update the language in the context
    setLanguage(newLanguage);
    setSelectedLanguage(newLanguage);
    setDropdownOpen(false);
  };

  // Update the selected language when the language context changes
  useEffect(() => {
    setSelectedLanguage(language);
  }, [language]);

  return (
    <>
      <div className="selector">
        <div className={`dropdown ${dropdownOpen ? "open" : ""}`} id="dropdown">
          <button id="button" onClick={toggleDropdown}>
            <img
              id="chevron"
              className="chevron"
              src={languageFlagMap[selectedLanguage]}
              alt=""
            />
          </button>
          <div id="menu" className="menu">
            <button onClick={() => handleLanguageChange("es")}>
              <img src={espanaIcon} alt="" />
            </button>
            <button onClick={() => handleLanguageChange("en")}>
              <img src={estadosUnidosIcon} alt="" />
            </button>
            <button onClick={() => handleLanguageChange("fr")}>
              <img src={franciaIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
