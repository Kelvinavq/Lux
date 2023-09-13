import React, { useContext } from "react";
import { LanguageContext } from "../home/LanguageContext";
import { Translation } from "../../Translation";

import "../../styles/ranking.css";
import imgGold from "../../assets/icons/medalla-de-oro.png";
import imgSilver from "../../assets/icons/medalla-de-plata.png";
import imgBronze from "../../assets/icons/medalla-de-bronce.png";

export const ListRanking = () => {
  const { language } = useContext(LanguageContext);

  const data = [
    {
      image: imgGold,
      position: "1",
      user: "Nombre Apellido",
      refer: "125",
      incomes: "540",
    },
    {
      image: imgSilver,
      position: "2",
      user: "Nombre Apellido",
      refer: "125",
      incomes: "540",
    },
    {
      image: imgBronze,
      position: "3",
      user: "Nombre Apellido",
      refer: "125",
      incomes: "540",
    },
    {
      position: "4",
      user: "Nombre Apellido",
      refer: "125",
      incomes: "540",
    },
  ];
  return (
    <>
      <div className="container-sidebar">
        <section className="container-ranking">
          <div className="head">
            <h2>{Translation[language].rankingTitle}</h2>
          </div>

          <div className="tabla">
            <table id="tablaUsuarios">
              <thead>
                <tr>
                  <th scope="col">{Translation[language].rankingTable1}</th>
                  <th scope="col">{Translation[language].rankingTable2}</th>
                  <th scope="col">{Translation[language].rankingTable3}</th>
                  <th scope="col">{Translation[language].rankingTable4}</th>
                </tr>
              </thead>
              <tbody>
                {data.map((rank, index) => (
                  <tr key={index}>
                    <td data-label={Translation[language].rankingTable1} className="posicion">
                      <img src={rank.image} alt="" />
                      Nº {rank.position}
                    </td>
                    <td data-label={Translation[language].rankingTable2}>{rank.user}</td>
                    <td data-label={Translation[language].rankingTable3} className="referidos">
                      + {rank.refer}
                    </td>
                    <td data-label={Translation[language].rankingTable4} className="ingresos">
                      + {rank.incomes} $
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
};
