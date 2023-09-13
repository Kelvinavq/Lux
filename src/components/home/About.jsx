import React, { useContext } from "react";
import { LanguageContext } from "../home/LanguageContext";
import { Translation } from "../../Translation";

import about_uno from "../../assets/img/about_uno.webp";
import about_dos from "../../assets/img/about_dos.webp";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import "../../styles/about.css";

import { Link } from "react-router-dom";
/**
 * The About component represents the about section of the homepage.
 * It displays information about the website or application.
 */

// THE BUTTON SHOULD REDIRECT THE USER TO REGISTER
export const About = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="container-inner">
      <section className="about">
        <div className="texts">
          {/* Title */}
          <h1>Lux</h1>

          {/* About Title */}
          <h2>{Translation[language].aboutTitle}</h2>

          {/* About Text */}
          <p>{Translation[language].aboutTextOne}</p>
          <p>{Translation[language].aboutTextTwo}</p>

          {/* THE BUTTON SHOULD REDIRECT THE USER TO REGISTER IN MLM */}
          <Link to="https://office.luxinternational.us/auth/login">
            <button>
              {Translation[language].buttonAbout}
              <div className="circulo">
                <NorthEastIcon />
              </div>
            </button>
          </Link>
        </div>
        {/* Images */}
        <div className="img">
          <img src={about_uno} alt="image about" />
          <img src={about_dos} alt="image about" />
        </div>
      </section>
    </div>
  );
};
