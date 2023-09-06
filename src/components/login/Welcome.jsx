import React, { useContext } from "react";
import { LanguageContext } from "../home/LanguageContext";
import { Translation } from "../../Translation";
import lux_logo from '../../assets/lux_logo.png'
import mapa from '../../assets/img/mapa.svg'
import '../../styles/login.css'

export const Welcome = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="welcome">

        <img src={lux_logo} className='lux-logo' alt="" />
        <h1>{Translation[language].loginTitle} <strong>LUX</strong></h1>
        <img src={mapa} className='mapa' alt="" />

    </div>
  )
}
