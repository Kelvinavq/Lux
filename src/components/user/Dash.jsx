import React, { useContext } from "react";
import { LanguageContext } from "../home/LanguageContext";
import { Translation } from "../../Translation";

import "../../styles/dashboard.css";
import ApexCharts from "react-apexcharts";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import img from "../../assets/img/slide.jpg";

export const Dash = () => {
  const { language } = useContext(LanguageContext);

  // SHOW ONLY THE LAST 3 COURSES PURCHASED BY THE USER
  const cursosData = [
    {
      nombre: "Inglés", //NAME OF COURSE
      descripcion:
        "Lorem ipsum, dolor sit amet consectetur adipis elit. Recusandae, libero?",
      progreso: "08 / 22", //DESCRIPTION OF COURSE
      progresoPorcentaje: 36, // PERCENT COMPLETE
    },
    {
      nombre: "Francés",
      descripcion: "Descripción del otro curso.",
      progreso: "10 / 20",
      progresoPorcentaje: 50,
    },
    {
      nombre: "E-commerce",
      descripcion: "Descripción del otro curso.",
      progreso: "90 / 100",
      progresoPorcentaje: 90,
    },
  ];

  // SHOW FROM THE BACKEND THE LAST 3 OF THE HOURS DEDICATED BY EACH USER
  const mesesGraph = [
    {
      mes: "Julio",
    },
    {
      mes: "Junio",
    },
    {
      mes: "mayo",
    },
  ];

  //SHOW THE LAST 3 VIDEOS VIEWED BY THE USER
  const videosData = [
    {
      nombre: "Inglés",
      tiempo: "1h 30 min",
      img: img,
    },
    {
      nombre: "Francés",
      tiempo: "30 min",
      img: img,
    },
    {
      nombre: "E-commerce",
      tiempo: "2h 20 min",
      img: img,
    },
  ];

  const options = {
    series: [70, 80, 90],
    chart: {
      height: 280,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: false,
            label: "Total",
            formatter: function (w) {
              return 249;
            },
          },
        },
      },
    },
    // SHOW FROM THE BACKEND THE LAST 3 OF THE HOURS DEDICATED BY EACH USER

    labels: ["Julio", "Junio", "Mayo"],
    colors: ["var(--morado)", "var(--rosa)", "var(--verde)"], // Aquí defines los colores que deseas usar
  };
  return (
    <>
      <div className="container-sidebar">
        <div className="content-dashboard">
          <div className="cards-dashboard">
            <div className="head">
              <h2>{Translation[language].dashUserTitle1}</h2>
              <a href="/user/courses">{Translation[language].dashUserLink}</a>
            </div>

            <div className="listCards">
              {cursosData.map((curso, index) => (
                <div className="card" key={index}>
                  <div className="contenedor-circulos">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
                  <div className="contenido">
                    <h2>{curso.nombre}</h2>
                    <p>{curso.descripcion}</p>

                    <div className="barra-progreso">
                      <div className="leccion">
                        <span>{curso.progreso}</span>
                      </div>

                      <div className="progress-loader">
                        <div
                          className="progress"
                          style={{ width: `${curso.progresoPorcentaje}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="estadisticas">
            <div className="graph">
              <div className="head">
                <h2>{Translation[language].dashUserTitle2}</h2>
              </div>

              <div className="card">
                <div className="contenedor-circulos">
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
                <div className="contenido">
                  <div className="head">
                    <span>{Translation[language].dashUserCard1}</span>
                  </div>

                  <div className="inner">
                    <div className="meses">
                      {mesesGraph.map((mes, index) => (
                        <div className="mes" key={index}>
                          <div className="badge"></div>
                          <p>{mes.mes}</p>
                        </div>
                      ))}
                    </div>

                    <div className="grafico">
                      <div id="chart">
                        <ApexCharts
                          options={options}
                          series={options.series}
                          type="radialBar"
                          height={280}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="videos">
              <div className="head">
                <h2>{Translation[language].dashUserTitle3}</h2>
              </div>

              <div className="inner">
                {videosData.map((video, index) => (
                  <div className="video" key={index}>
                    <div className="img-video">
                      <img src={video.img} alt="" />
                    </div>
                    <div className="content-video">
                      <span>{video.nombre}</span>
                      <div className="tiempo">
                        <AccessTimeIcon />
                        <p>{video.tiempo}</p>
                      </div>
                    </div>

                    {/* redirigir al respectivo video en Lecture.jsx */}
                    <button className="btn">
                      <PlayArrowIcon />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
