import React, { useContext } from "react";
import { LanguageContext } from "../home/LanguageContext";
import { Translation } from "../../Translation";

import "../../styles/courseList.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import imgLorena from "../../assets/teachers/lorena_cabrera.jpg";
import imgRicardo from "../../assets/teachers/ricardo_zambrana.jpg";
import imgOthni from "../../assets/teachers/othni_makwala.jpg";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export const CourseList = () => {
  const { language } = useContext(LanguageContext);

  // Data for courses

  // Show all courses purchased by the user
  const coursesData = [
    {
      name: "Titulo Curso",
      teacher: "Lorena Cabrera",
      image: imgLorena,
      progressPercentage: 36,
      link: "/user/courses",
      statusLive: "",
    },
    {
      name: "Titulo Curso",
      teacher: "Ricardo Zambrana",
      image: imgRicardo,
      progressPercentage: 75,
      link: "/user/courses",
      statusLive: "active",
    },
    {
      name: "Titulo Curso",
      teacher: "Othni Makwala",
      image: imgOthni,
      progressPercentage: 90,
      link: "/user/courses",
      statusLive: "",
    },
  ];

  // Function to handle language selection for a course

  //  Redirect the user to the corresponding video according to the selected language
  const handleLanguageSelection = (course) => {
    Swal.fire({
      title: "Seleccione el idioma",
      input: "select",
      inputOptions: {
        es: "Español",
        en: "Inglés",
        fr: "Francés",
      },
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Confirmar",
      inputPlaceholder: "Seleccione un idioma",
    }).then((result) => {
      if (result.isConfirmed) {
        const selectedLanguage = result.value;
        // Redirect the user to the corresponding video according to the selected language
        console.log(`Curso ${course.name} comenzará en ${selectedLanguage}`);
      }
    });
  };
  return (
    <>
      <div className="container-sidebar">
        <div className="content-courseList">
          <div className="head">
            <div className="texts">
              <h1>{Translation[language].userCoursesTitle}</h1>
              <p>{Translation[language].userCoursesText}</p>
            </div>

            <button>{Translation[language].userCoursesButton}</button>
          </div>

          <div className="courseList">
            {coursesData.map((course, index) => (
              <div className="card" key={index}>
                <div className="contenedor-circulos">
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
                <div className="contenido">
                  <div className="imgTeacher">
                    <div
                      className={`badge_live ${
                        course.statusLive === "active" ? "active" : ""
                      }`}
                    >
                      <span>{Translation[language].userCoursesBadgeLive}</span>
                    </div>
                    <img src={course.image} alt="" />
                  </div>

                  <button className="profile">
                    <Link to={course.link}>
                      <AccountCircleOutlinedIcon />
                    </Link>
                  </button>

                  <div className="texts">
                    <h2>{course.name}</h2>
                    <p>{course.teacher}</p>
                    <div className="progress-loader">
                      <div
                        className="progress"
                        style={{ width: `${course.progressPercentage}%` }}
                      ></div>
                    </div>
                    <p>
                      {Translation[language].userCoursesCardText}{" "}
                      {course.progressPercentage}%
                    </p>
                  </div>

                  <div className="buttons">
                    <button onClick={() => handleLanguageSelection(course)}>
                      {Translation[language].userCoursesCardButton1}
                    </button>
                    <button onClick={() => handleLanguageSelection(course)}>
                      {Translation[language].userCoursesCardButton2}
                    </button>

                    <button className={` ${
                        course.statusLive === "active" ? "active" : ""
                      }`}>
                      {Translation[language].userCoursesCardButton3}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
