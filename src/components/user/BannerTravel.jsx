import { useContext } from "react";
import { LanguageContext } from "../home/LanguageContext";
import { Translation } from "../../Translation";

import imgTravel from "../../assets/travel/travel.jpg";
import "../../styles/travel.css";

export const BannerTravel = () => {
  const { language } = useContext(LanguageContext);

  const bannerStyle = {
    backgroundImage: `url(${imgTravel})`,
  };

  const data = [
    {
      user: "Nombre Apellido 1",
      destination: "Destino 1",
      date: "15/10/2023",
    },
    {
      user: "Nombre Apellido 2",
      destination: "Destino 2",
      date: "15/10/2023",
    },
    {
      user: "Nombre Apellido 3",
      destination: "Destino 3",
      date: "15/10/2023",
    },
  ];

  return (
    <>
      <div className="container-banner">
        <div className="head">
          <h2>{Translation[language].travelTitle}</h2>
          <p>{Translation[language].travelText}</p>
        </div>

        <div className="banner" style={bannerStyle}></div>

        <div className="container-table">
          <div className="tabla">
            <div className="head">
              <h2>{Translation[language].travelTitle2}</h2>
            </div>
            <table>
              <thead>
                <tr>
                  <th scope="col">{Translation[language].travelHeadTable1}</th>
                  <th scope="col">{Translation[language].travelHeadTable2}</th>
                  <th scope="col">{Translation[language].travelHeadTable3}</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user, index) => (
                  <tr key={index}>
                    <td data-label="Usuario">{user.user}</td>
                    <td data-label="Destino">{user.destination}</td>
                    <td data-label="Fecha">{user.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="stats">
            <div className="title">
              <h2>{Translation[language].travelCardTitle}</h2>
            </div>

            <div className="stat">
              <div className="item">
                <span>{Translation[language].travelCardItem1}</span>
                <p>00 / 00</p>
              </div>
              <div className="item">
                <span>{Translation[language].travelCardItem2}</span>
                <p>00 / 00</p>
              </div>

              <div className="item">
                <span>{Translation[language].travelCardItem3}</span>
                <p>Rango</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
