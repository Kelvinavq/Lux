import React, { useContext } from "react";
import { LanguageContext } from "../home/LanguageContext";
import { Translation } from "../../Translation";

import "../../styles/dashboard.css";
import ApexCharts from "react-apexcharts";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PersonIcon from "@mui/icons-material/Person";
import AssessmentIcon from "@mui/icons-material/Assessment";
import img from "../../assets/img/courseImg.jpg";
import img2 from "../../assets/img/courseImg2.jpg";

export const Dash = () => {
  const { language } = useContext(LanguageContext);


  const statsList = [
    {
      icon: <PersonIcon />,
      name: Translation[language].dashAdminCard1,
      number: "+ 520", //Show USERS FROM THE BACKEND 
    },
    {
      icon: <AccountBalanceWalletIcon />,
      name: Translation[language].dashAdminCard2,
      number: "+ 6540", //Show INCOME FROM THE BACKEND
    },
    {
      icon: <AssessmentIcon />,
      name: Translation[language].dashAdminCard3,
      number: "+ 610", //Show FROM THE BACKEND THE NUMBER OF CURSE SELLED
    },
  ];

  // SHOW FROM THE BACKEND THE LAST 3 MONTHS OF SALES
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
    // SHOW FROM THE BACKEND THE LAST 3 MONTHS OF SALES
    labels: ["Julio", "Junio", "Mayo"],
  };

  // SHOW FROM THE BACKEND THE 2 MOST SELLING COURSES
  const sales = [
    {
      course: "Trading", // COURSE NAME
      sales: 150, // NUMBER OF SALES
      cash: 1600, // TOTAL MONEY FROM SALES
      img: img, // IMAGE
    },
    {
      course: "Idiomas",
      sales: 80,
      cash: 900,
      img: img2,
    },
  ];



  return (
    <>
      <div className="container-sidebar">
        <div className="content-dashboard">
          <div className="cards-dashboard">
            <div className="head">
              <h2>{Translation[language].dashAdminTitle1}</h2>
            </div>

            <div className="listCards admin">
              {statsList.map((stats, index) => (
                <div className="card" key={index}>
                  <div className="contenedor-circulos">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
                  <div className="contenido">
                    <div className="icon">{stats.icon}</div>

                    <p>{stats.name}</p>
                    <h2>{stats.number}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="estadisticas">
            <div className="graph">
              <div className="head">
                <h2>{Translation[language].dashAdminTitle2}</h2>
              </div>

              <div className="card">
                <div className="contenedor-circulos">
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
                <div className="contenido">
                  <div className="head">
                    <span>{Translation[language].dashAdminCard4}</span>
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

            <div className="sales">
              <div className="head">
                <h2>{Translation[language].dashAdminTitle3}</h2>
              </div>

              <div className="cards">
                {sales.map((sale, index) => (
                  <div className="card " key={index}>
                    <div className="contenedor-circulos">
                      <div className="circle"></div>
                      <div className="circle"></div>
                      <div className="circle"></div>
                    </div>
                    <div className="contenido">
                      <div className="img">
                        <img src={sale.img} alt="" />
                      </div>

                        <h2>{sale.course}</h2>

                      <div className="numbers">
                        <span>{sale.sales} ventas</span>
                        <span>+ {sale.cash} $</span>
                      </div>
                    </div>
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
