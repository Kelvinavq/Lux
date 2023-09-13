import React, { useContext } from "react";
import { LanguageContext } from "../home/LanguageContext";
import { Translation } from "../../Translation";
import "../../styles/memberships.css";
import lux_logo from "../../assets/lux_logo.png";
import { Link } from "@mui/material";

/**
 * The Memberships component displays information about different membership plans,
 * including their titles, features, and a "Buy" button.
 */

export const Memberships = () => {
  const { language } = useContext(LanguageContext);
  // Data for different membership plans
  const membershipsData = [
    {
      title: Translation[language].basicTitle,
      bgTitle: Translation[language].basicTitle,
      features: [
        Translation[language].basicContent1,
        Translation[language].basicContent2,
      ],
    },
    {
      title: Translation[language].vipTitle,
      bgTitle: Translation[language].vipTitle,
      features: [
        Translation[language].vipContent1,
        Translation[language].vipContent2,
        Translation[language].vipContent3,
        Translation[language].vipContent4,
        Translation[language].vipContent5,
      ],
    },
    {
      title: Translation[language].eliteTitle,
      bgTitle: Translation[language].eliteTitle,
      features: [
        Translation[language].eliteContent1,
        Translation[language].eliteContent2,
        Translation[language].eliteContent3,
        Translation[language].eliteContent4,
        Translation[language].eliteContent5,
      ],
    },
  ];

  const handleRedirect = () => {
    window.location.href = "https://office.luxinternational.us/auth/login";
  };
  return (
    <div className="container-inner">
      <div className="memberships">
        <div className="texts">
          <h2>{Translation[language].membershipTitle}</h2>
          <p>{Translation[language].membershipText1}</p>
          <p>{Translation[language].membershipText2}</p>
        </div>

        <div className="cards-memberships">
          {membershipsData.map((membership, index) => (
            <div className="membership" key={index}>
              <div className="logo">
                <img src={lux_logo} alt="" />
              </div>
              <div className="photo"></div>
              <div className="content">
                <div className="title">{membership.title}</div>
                <div className="bg-title">{membership.bgTitle}</div>
                <div className="feature size">
                  {membership.features.map((feature, index) => (
                    <span key={index}>{feature}</span>
                  ))}
                </div>
                  <button onClick={handleRedirect} className="btn-buy">
                    {Translation[language].membershipButton}
                  </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
