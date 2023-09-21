import { useContext } from "react";
import { LanguageContext } from "../home/LanguageContext";
import { Translation } from "../../Translation";

import usdtLogo from "../../assets/icons/tether-usdt-logo.svg";
import "../../styles/request.css"

export const CardsRequest = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section className="container-cardsRequest">

      <div className="title">
        <h2>{Translation[language].requestTitle}</h2>
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
              <h2>{Translation[language].requestCardBalance}</h2>
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
              <h2>{Translation[language].requestCardMinimum}</h2>
              <span>$ 100</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
