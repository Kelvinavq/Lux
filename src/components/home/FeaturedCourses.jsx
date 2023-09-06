import React, { useState, useEffect, useRef, useContext } from "react";
import { LanguageContext } from "../home/LanguageContext";
import { Translation } from "../../Translation";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import coaching_ventas from "../../assets/courses/coaching_ventas.jpeg";
import dropshipping from "../../assets/courses/dropshipping.jpg";
import ecommerce from "../../assets/courses/ecommerce.jpg";
import ingles from "../../assets/courses/ingles.jpg";
import marketing_digital from "../../assets/courses/marketing_digital.jpeg";
import oratoria from "../../assets/courses/oratoria.jpg";
import trading from "../../assets/courses/trading.jpg";

import "../../styles/courses.css";

/**
 * The Slider component is responsible for displaying a carousel of courses.
 * It allows users to scroll through a list of courses.
 *
 *  data - An array of course data to be displayed in the carousel.
 */

const Slider = ({ data }) => {
  const { language } = useContext(LanguageContext);

  const [isDragging, setIsDragging] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const timeoutId = useRef(null);
  const carouselRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = data.length;

  useEffect(() => {
    const dragStart = (e) => {
      setIsDragging(true);
      carouselRef.current.classList.add("dragging");
      setStartX(e.pageX);
      setStartScrollLeft(carouselRef.current.scrollLeft);
    };

    const dragging = (e) => {
      if (!isDragging) return;
      carouselRef.current.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragStop = () => {
      setIsDragging(false);
      carouselRef.current.classList.remove("dragging");
    };

    const infiniteScroll = () => {
      const slideWidth = carouselRef.current.offsetWidth;
      if (carouselRef.current.scrollLeft === 0) {
        // Reached the beginning, scroll to the end
        setCurrentSlide(totalSlides - 1);
        carouselRef.current.scrollLeft = slideWidth * (totalSlides - 1);
      } else if (
        Math.ceil(carouselRef.current.scrollLeft) ===
        slideWidth * (totalSlides - 1)
      ) {
        // Reached the end, scroll to the beginning
        setCurrentSlide(0);
        carouselRef.current.scrollLeft = 0;
      }

      clearTimeout(timeoutId.current);
    };

    // Agregar eventos de escucha después de definir las funciones
    carouselRef.current.addEventListener("mousedown", dragStart);
    document.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carouselRef.current.addEventListener("scroll", infiniteScroll);
    carouselRef.current.addEventListener("mouseenter", () =>
      clearTimeout(timeoutId.current)
    );
  }, [startX, startScrollLeft, timeoutId]);

  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
      card.addEventListener("mouseover", () => {
        const firstCardWidth =
          carouselRef.current.querySelector(".card").offsetWidth;
        cards.forEach((otherCard, otherIndex) => {
          if (otherIndex > index) {
            otherCard.style.transition = "transform 0.3s ease";
            otherCard.style.transform = `translateX(${firstCardWidth}px)`;
          }
        });
      });

      card.addEventListener("mouseout", () => {
        cards.forEach((otherCard) => {
          otherCard.style.transition = "transform 0.3s ease";
          otherCard.style.transform = "none";
        });
      });
    });
  }, []);

  return (
    <div className="container-inner">
      <div className="container-courses">
        <div className="texts">
          <h2>{Translation[language].fcTitle}</h2>
          <p>{Translation[language].fcText1}</p>
          <p>{Translation[language].fcText2}</p>
        </div>

        <div className="wrapper">
          <KeyboardArrowLeftIcon
            className="arrow-icon"
            onClick={() => {
              carouselRef.current.scrollLeft -=
                carouselRef.current.querySelector(".card").offsetWidth;
            }}
          />
          <div className="carousel" ref={carouselRef}>
            {data.map((item, index) => (
              <div
                key={index}
                className={`card ${index === currentSlide ? "active" : ""}`}
              >
                <div className="img-course">
                  <img src={item.imgSrc} alt={item.imgAlt} draggable="false" />
                </div>
                <div className="title">
                  <h2>{item.name}</h2>
                </div>
                <div className="content-course">
                  <div className="container-content">
                    <div className="badge">
                      <span>{item.category}</span>
                    </div>
                    <h2>{item.name}</h2>
                    <p>{item.content}</p>
                    <p>{item.content1}</p>
                    <p>{item.content2}</p>
                    <p>{item.content3}</p>
                    <p>{item.content4}</p>
                    <div className="link">
                      <a href="https://luxinternational.us/auth/login">{Translation[language].FCbutton}</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <KeyboardArrowRightIcon
            className="arrow-icon"
            onClick={() => {
              carouselRef.current.scrollLeft +=
                carouselRef.current.querySelector(".card").offsetWidth;
            }}
          />
        </div>
      </div>
    </div>
  );
};

/**
 * The FeaturedCourses component is responsible for displaying featured courses.
 * It utilizes the Slider component to create a carousel of courses.
 */

const FeaturedCourses = () => {
  // load all MLM software courses
  // load all MLM software courses
  // load all MLM software courses
  // load all MLM software courses

  const { language } = useContext(LanguageContext);
  const data = [
    // ... (Define an array of course data)

    {
      imgSrc: coaching_ventas,
      imgAlt: Translation[language].FCname,
      category: Translation[language].FCcategory,
      name: Translation[language].FCname,
      content: Translation[language].FCcontent,
      content2: Translation[language].FCcontentOne,
      content3: Translation[language].FCcontentTwo,
      content4: Translation[language].FCcontentThree,
      
    },
    {
      imgSrc: ingles,
      imgAlt: Translation[language].FCname2,
      category: Translation[language].FCcategory2,
      name: Translation[language].FCname2,
      content: Translation[language].FCcontent2,
      content1: Translation[language].FCcontentOne2,
    },
    {
      imgSrc: dropshipping,
      imgAlt: Translation[language].FCname3,
      category: Translation[language].FCcategory3,
      name: Translation[language].FCname3,
      content: Translation[language].FCcontent3,
      content1: Translation[language].FCcontentOne3,
    },
    {
      imgSrc: oratoria,
      imgAlt: Translation[language].FCname4,
      category: Translation[language].FCcategory4,
      name: Translation[language].FCname4,
      content: Translation[language].FCcontent4,
      content1: Translation[language].FCcontentOne4,
    },
    {
      imgSrc: trading,
      imgAlt: Translation[language].FCname5,
      category: Translation[language].FCcategory5,
      name: Translation[language].FCname5,
      content: Translation[language].FCcontent5,
      content1: Translation[language].FCcontentOne5,
      content2: Translation[language].FCcontentTwo5,
    },
    {
      imgSrc: marketing_digital,
      imgAlt: Translation[language].FCname6,
      category: Translation[language].FCcategory6,
      name: Translation[language].FCname6,
      content: Translation[language].FCcontent6,
      content1: Translation[language].FCcontentOne6,
    },
    {
      imgSrc: ecommerce,
      imgAlt: Translation[language].FCname7,
      category: Translation[language].FCcategory7,
      name: Translation[language].FCname7,
      content: Translation[language].FCcontent7,
      content1: Translation[language].FCcontentOne7,
    },
    {},
  ];
  return (
    <div>
      {/* Render the Slider component with course data */}
      <Slider data={data} />
    </div>
  );
};

export default FeaturedCourses;
