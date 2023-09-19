import { useEffect, useContext } from "react";
import { Parallax } from "react-parallax";
import { LanguageContext } from "../home/LanguageContext";
import { Translation } from "../../Translation";

import "../../styles/coursesDetails.css";

// images
import imgCoaching from "../../assets/courses/coaching_ventas.jpeg";
import imgDropshipping from "../../assets/courses/dropshipping.jpg";
import imgOratoria from "../../assets/courses/oratoria.jpg";
import imgTrading from "../../assets/courses/trading.jpg";
import imgMarketing from "../../assets/courses/marketing_digital.jpeg";
import imgEcommerce from "../../assets/courses/ecommerce.jpg";

// backgrounds
import bgCoaching from "../../assets/courses/BgCoaching.jpg";
import bgOratoria from "../../assets/courses/BgOratoria.jpg";
import bgEcommerce from "../../assets/courses/BgEcommerce.jpg";

import AOS from "aos";
import aosConfig from "../../aosConfig";

import { Link } from "react-router-dom";

export const CourseDetail = () => {
  const { language } = useContext(LanguageContext);
  const data = [
    {
      className: "parallax",
      BgImage: bgCoaching,
      image: imgCoaching,
      lux: "LUX",
      academy: "academy",
      title: Translation[language].coachingTitle,
      text: Translation[language].coachingText,
      button: Translation[language].buttonMore,
      buttonLink: "#",
      id: "coaching",
    },
    {
      className: "no-parallax",
      image: imgCoaching,
      lux: "LUX",
      academy: "academy",
      title: Translation[language].englishTitle,
      text: Translation[language].englishText,
      button: Translation[language].buttonMore,
      buttonLink: "#",
      id: "english",
    },
    {
      className: "no-parallax",
      image: imgDropshipping,
      lux: "LUX",
      academy: "academy",
      title: Translation[language].dropshippingTitle,
      text: Translation[language].dropshippingText,
      button: Translation[language].buttonMore,
      buttonLink: "#",
      id: "dropshipping",
    },
    {
      className: "parallax",
      BgImage: bgOratoria,
      image: imgOratoria,
      lux: "LUX",
      academy: "academy",
      title: Translation[language].oratoryTitle,
      text: Translation[language].oratoryText,
      button: Translation[language].buttonMore,
      buttonLink: "#",
      id: "oratory",
    },
    {
      className: "no-parallax",
      image: imgTrading,
      lux: "LUX",
      academy: "academy",
      title: Translation[language].tradingTitle,
      text: Translation[language].tradingText,
      button: Translation[language].buttonMore,
      buttonLink: "#",
      id: "trading",
    },
    {
      className: "no-parallax",
      image: imgMarketing,
      lux: "LUX",
      academy: "academy",
      title: Translation[language].marketingTitle,
      text: Translation[language].marketingText,
      button: Translation[language].buttonMore,
      buttonLink: "#",
      id: "marketing",
    },
    {
      className: "parallax",
      BgImage: bgEcommerce,
      image: imgEcommerce,
      lux: "LUX",
      academy: "academy",
      title: Translation[language].ecommerceTitle,
      text: Translation[language].ecommerceText,
      button: Translation[language].buttonMore,
      buttonLink: "#",
      id: "ecommerce",
    },
  ];

  useEffect(() => {
    AOS.init(aosConfig);
  }, []);

  return (
    <>
      {data.map((course, index) => (
        <Parallax
          key={index}
          className={course.className}
          bgImage={course.BgImage}
          strength={500}
        >
          <div className="layer"></div>
          <div style={{ height: "700px" }} className="detail" id={course.id}>
            <div className="courses-details">
              <div className="course-detail">
                {index % 2 === 0 ? ( // Si el índice es par, mostrar .left primero
                  <>
                    <div className="left">
                      <div className="texts">
                        <div className="lux" data-aos="fade-up">
                          <h2>
                            <strong>{course.lux}</strong> {course.academy}
                          </h2>
                        </div>
                        <h2 data-aos="fade-up">{course.title}</h2>
                        <p data-aos="fade-up"> {course.text}</p>
                        <button data-aos="fade-up">
                          <Link
                            to={"https://office.luxinternational.us/auth/login"}
                          >
                            {course.button}
                          </Link>
                        </button>
                      </div>
                    </div>
                    <div className="right" data-aos="fade-up">
                      <img src={course.image} alt="" />
                    </div>
                  </>
                ) : (
                  // Si el índice es impar, mostrar .right primero
                  <>
                    <div className="right" data-aos="fade-up">
                      <img src={course.image} alt="" />
                    </div>
                    <div className="left">
                      <div className="texts">
                        <div className="lux" data-aos="fade-up">
                          <h2>
                            <strong>{course.lux}</strong> {course.academy}
                          </h2>
                        </div>
                        <h2 data-aos="fade-up">{course.title}</h2>
                        <p data-aos="fade-up"> {course.text}</p>
                        <button data-aos="fade-up">
                          <Link
                            to={"https://office.luxinternational.us/auth/login"}
                          >
                            {course.button}
                          </Link>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </Parallax>
      ))}
    </>
  );
};
