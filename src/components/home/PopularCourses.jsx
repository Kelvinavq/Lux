import React, { useContext, useState } from "react";
import { LanguageContext } from "../home/LanguageContext";
import { Translation } from "../../Translation";
import cita_icon from "../../assets/icons/cita-izquierda.webp";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import "../../styles/popularCourses.css";

import coaching from "../../assets/courses/PCcoaching.jpg";
import ingles from "../../assets/courses/PCingles.jpeg";
import dropshipping from "../../assets/courses/PCdropshipping.jpeg";
import oratoria from "../../assets/courses/PCoratoria.jpg";
import trading from "../../assets/courses/PCtrading.jpg";
import marketing from "../../assets/courses/PCmarketing.jpg";
import ecommerce from "../../assets/courses/PCecommerce.jpg";

/**
 * The PopularCourses component displays popular courses with images, titles, subtitles, and descriptions.
 * Users can navigate through the courses using a slider.
 */

const PopularCourses = () => {
  const { language } = useContext(LanguageContext);

  const [currentIndex, setCurrentIndex] = useState(0);
  const maxDots = 4; // Máximo número de dots a mostrar

  // Course data

  /*Please ensure that all courses are properly loaded and displayed in the PopularCourses component. This component is designed to showcase popular courses, and it relies on the data provided to present these courses to users.
   */
  const items = [
    {
      image: coaching,
      title: Translation[language].PCtitle,
      subtitle: Translation[language].PCsubtitle,
      description:Translation[language].PCdescription,
    },
    {
      image: ingles,
      title: Translation[language].PCtitle2,
      subtitle: Translation[language].PCsubtitle2,
      description:Translation[language].PCdescription2,
    },
    {
      image: dropshipping,
      title: Translation[language].PCtitle3,
      subtitle: Translation[language].PCsubtitle3,
      description:Translation[language].PCdescription3,
    },
    {
      image: oratoria,
      title: Translation[language].PCtitle4,
      subtitle: Translation[language].PCsubtitle4,
      description:Translation[language].PCdescription4,
    },
    {
      image: trading,
      title: Translation[language].PCtitle5,
      subtitle: Translation[language].PCsubtitle5,
      description:Translation[language].PCdescription5,
    },
    {
      image: marketing,
      title: Translation[language].PCtitle6,
      subtitle: Translation[language].PCsubtitle6,
      description:Translation[language].PCdescription6,
    },
    {
      image: ecommerce,
      title: Translation[language].PCtitle7,
      subtitle: Translation[language].PCsubtitle7,
      description:Translation[language].PCdescription7,
    },
  ];

  // Function to display the selected slide
  const showSlide = (index) => {
    if (index < 0) {
      setCurrentIndex(items.length - 1);
    } else if (index >= items.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  };

  // Function to update the pagination dots
  const updatePagination = () => {
    const dotCount = Math.min(items.length, maxDots);
    const startIndex = Math.max(0, currentIndex - maxDots + 1);

    return (
      <div className="slider-dots">
        {[...Array(dotCount)].map((_, i) => (
          <div
            key={i}
            className={`dot ${i + startIndex === currentIndex ? "active" : ""}`}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <div className="container-inner">
      <section className="courses">
        <div className="container-slider">
          <div className="bg-slider">
            <div className="slider">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`item-slider ${
                    index === currentIndex ? "active" : ""
                  }`}
                >
                  <div className="head">
                    <div className="img">
                      <img src={item.image} alt="" />
                    </div>

                    <div className="texts">
                      <h2>{item.title}</h2>
                      <p>{item.subtitle}</p>
                    </div>
                  </div>

                  <div className="content">
                    <img src={cita_icon} alt="" />
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="navigation">
            <div className="slider-navigation">
              <button
                className="slider-prev"
                onClick={() => showSlide(currentIndex - 1)}
              >
                <KeyboardArrowLeftIcon />
              </button>
              {updatePagination()}
              <button
                className="slider-next"
                onClick={() => showSlide(currentIndex + 1)}
              >
                <KeyboardArrowRightIcon />
              </button>
            </div>
          </div>
        </div>

        <div className="texts">
          <h2>Lux</h2>
          <h3>{Translation[language].ppTitle}</h3>
          <p>{Translation[language].ppText}</p>
        </div>
      </section>
    </div>
  );
};

export default PopularCourses;
