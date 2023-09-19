import React, { useState, useEffect, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LanguageContext } from "../home/LanguageContext";
import { Translation } from "../../Translation";
import "../../styles/coursesSlider.css";

import imgCoaching from "../../assets/courses/coaching_ventas.jpeg";
import imgDropshipping from "../../assets/courses/dropshipping.jpg";
import imgOratoria from "../../assets/courses/oratoria.jpg";
import imgTrading from "../../assets/courses/trading.jpg";
import imgMarketing from "../../assets/courses/marketing_digital.jpeg";
import imgEcommerce from "../../assets/courses/ecommerce.jpg";
// import imgIngles from "../../assets/courses/ingles.jpg"


import AOS from "aos";
import aosConfig from "../../aosConfig";

export const CoursesSlider = () => {
  const { language } = useContext(LanguageContext);

  const data = [
    {
      image: imgCoaching,
      title: Translation[language].courseTitleCoaching,
      link: "#coaching",
    },
    {
      image: imgCoaching,
      title: Translation[language].courseTitleEnglish,
      link: "#english",
    },
    {
      image: imgDropshipping,
      title: Translation[language].courseTitleDropshipping,
      link: "#dropshipping",
    },
    {
      image: imgOratoria,
      title: Translation[language].courseTitleOratory,
      link: "#oratory",
    },
    {
      image: imgTrading,
      title: Translation[language].courseTitleTrading,
      link: "#trading",
    },
    {
      image: imgMarketing,
      title: Translation[language].courseTitleMarketing,
      link: "#marketing",
    },
    {
      image: imgEcommerce,
      title: Translation[language].courseTitleEcommerce,
      link: "#ecommerce",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [isGrabbing, setIsGrabbing] = useState(false);
  const handleMouseDown = () => {
    setIsGrabbing(true);
  };

  const handleMouseUp = () => {
    setIsGrabbing(false);
  };

  useEffect(() => {
    AOS.init(aosConfig);
  }, []);

  return (
    <div
      className={`courses-slider ${isGrabbing ? "grabbing" : ""}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      id="courses"
    >
      <Slider {...settings}>
        {data.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.image} alt="" />

            <div className="content-slider">
              <div className="inner-slider">
                <div className="text">
                  <h2>
                    <strong>LUX</strong> {course.title}
                  </h2>
                </div>

                <div className="button">
                  <button>
                    <a href={course.link}>{Translation[language].buttonMore}</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
