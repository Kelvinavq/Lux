import React, { useContext, useState } from "react";
import { LanguageContext } from "../home/LanguageContext";
import { Translation } from "../../Translation";
import img from "../../assets/teachers/lorena_cabrera.jpg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VideosList from "./VideosList";

export const TabBar = ({ videos, playVideo }) => {
  const { language } = useContext(LanguageContext);

  const [selectedTab, setSelectedTab] = useState("descripcion"); // State to control the selected tab

  // Function to change the selected tab
  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <>
      <div className="container-tabBar">
        <div className="tab-bar">
          <div
            className={`tab ${selectedTab === "descripcion" ? "active" : ""}`}
            onClick={() => handleTabClick("descripcion")}
          >
            {Translation[language].tab1}
          </div>
          <div
            className={`tab ${selectedTab === "contenido" ? "active" : ""}`}
            onClick={() => handleTabClick("contenido")}
          >
            {Translation[language].tab2}
          </div>

          <div
            className={`tab ${selectedTab === "anuncios" ? "active" : ""}`}
            onClick={() => handleTabClick("anuncios")}
          >
            {Translation[language].tab3}
          </div>
          <div
            className={`tab ${selectedTab === "recursos" ? "active" : ""}`}
            onClick={() => handleTabClick("recursos")}
          >
            {Translation[language].tab4}
          </div>
        </div>

        <div className="tab-content">
          {selectedTab === "descripcion" && (
            <div className="container-tab">
              <div className="teacher">
                <div className="img">
                  <img src={img} alt="" />
                </div>

                <div className="name">
                  <h4>Autor: </h4>
                  <p>Nombre apellido</p>
                </div>
              </div>
            </div>
          )}
          {selectedTab === "contenido" && (
            <div className="container-tab">
              <VideosList videos={videos} playVideo={playVideo} />
            </div>
          )}
          {selectedTab === "anuncios" && (
            <div>Contenido de la pestaña Anuncios</div>
          )}
          {selectedTab === "recursos" && (
            <div>Contenido de la pestaña Recursos</div>
          )}
        </div>
      </div>
    </>
  );
};
