import React, { useState } from "react";
import logo from "../../assets/lux_logo.png";

import "../../styles/header.css";
import { Link } from "react-router-dom";
import { LenguageSelector } from "./LenguageSelector";


/**
 * The Header component represents the header section of the website,
 * displaying the Lux Academy logo and a language selector.
 */

export const Header = () => {
  return (
    <>
      <div className="top">
        <Link to="/" className="logo">
           {/* Lux Academy Logo */}
          <img src={logo} alt="lux-logo" />
        </Link>
        
         {/* Language Selector */}
        <LenguageSelector/>
      </div>
    </>
  );
};
