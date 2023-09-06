import React, { useContext } from "react";
import { LanguageContext } from "../home/LanguageContext";
import { Translation } from "../../Translation";
import lux_logo from "../../assets/lux_logo.png";
import igIcon from "../../assets/icons/instagram.png";
import TwitchIcon from "../../assets/icons/twitch.png";
import YoutubeIcon from "../../assets/icons/youtube.png";
import "../../styles/footer.css";

/**
 * The Footer component represents the footer section of the website,
 * displaying social media links and the Lux Academy logo.
 */
export const Footer = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="container-inner footer">
      <footer>
        {/* Lux Academy Logo */}
        <img className="logo" src={lux_logo} alt="Lux Academy Logo" />

        <div className="social">
          {/* Footer Title */}
          <h2>{Translation[language].footerTitle}</h2>

          {/* Social Media Links */}
          <ul className="wrapperSocial">
            {/* Instagram Link */}
            <a href="https://www.instagram.com/lux.academ/" className="icon instagram" target="_blank" rel="noopener noreferrer">
              <span className="tooltip">{Translation[language].ig}</span>
              <img src={igIcon} alt="Instagram Icon" />
            </a >

            {/* Twitch Link */}
            <a href="https://www.twitch.tv/luxacademia" className="icon twitch" target="_blank" rel="noopener noreferrer">
              <span className="tooltip">{Translation[language].tw}</span>
              <img src={TwitchIcon} alt="Twitch Icon" />
            </a >

            {/* YouTube Link */}
            <a href="https://www.youtube.com/@LUXACADEMY-iu8ey" className="icon youtube" target="_blank" rel="noopener noreferrer">
              <span className="tooltip">{Translation[language].yt}</span>
              <img src={YoutubeIcon} alt="YouTube Icon" />
            </a >
          </ul>
        </div>
      </footer>

      <div className="links">
        <a href="/">{Translation[language].footerLink1}</a>
      </div>
    </div>
  );
};
