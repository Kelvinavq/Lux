import React, { useContext } from "react";
import { LanguageContext } from "../home/LanguageContext";
import { Translation } from "../../Translation";

import usdtLogo from "../../assets/icons/tether-usdt-logo.svg";
import "../../styles/transfer.css"

export const CardsTransfer = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section className="container-cardsTransfer">

      <div className="title">
        <h2>{Translation[language].transferTitle}</h2>
      </div>
      <div className="cards">
        <div className="card">
          <div className="contenedor-circulos">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
          <div className="contenido">
            <div className="img">
              <div className="circle">
                <img src={usdtLogo} alt="" />
              </div>
            </div>

            <div className="content-card">
              <h2>{Translation[language].transferCardBalance}</h2>
              <span>$ 145</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="contenedor-circulos">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
          <div className="contenido">
            <div className="img">
              <div className="circle">
                <img src={usdtLogo} alt="" />
              </div>
            </div>

            <div className="content-card">
              <h2>{Translation[language].transferCardBalanceDeposit}</h2>
              <span>$ 1.150</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
