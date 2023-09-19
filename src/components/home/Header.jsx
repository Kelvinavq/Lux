import { useContext, useEffect } from "react";
import figura from "../../assets/img/figura-header.png";
import AOS from "aos";
import aosConfig from "../../aosConfig";
import { Link } from "react-router-dom";
import { LanguageContext } from "../home/LanguageContext";
import { Translation } from "../../Translation";

import "../../styles/header.css";

export const Header = () => {
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    AOS.init(aosConfig);
  }, []);

  return (
    <>
      <div className="cont-header" id="home">
        <div className="header">
          <div className="left">
            <div data-aos="fade-right" className="title">
              <h2>
                {Translation[language].headerTitle} <div data-aos="fade-down" className="circle"></div>
              </h2>
              <h1>LUX</h1>
            </div>
            <div className="text" data-aos="fade-right">
              <p>
              {Translation[language].headerText}
              </p>
            </div>

            <div className="buttons">
              <button data-aos="fade-right"><Link to={'/user/dashboard'}>{Translation[language].headerButton1}</Link></button>
              <button data-aos="fade-left"><a href="#memberships">{Translation[language].headerButton2}</a></button>
            </div>
          </div>
          <div className="right">
            <img data-aos="zoom-in-left" src={figura} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
