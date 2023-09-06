import React, { useContext, useState } from "react";
import { LanguageContext } from "../home/LanguageContext";
import { Translation } from "../../Translation";
import imgTestimonial1 from "../../assets/testimonials/testimonial1.jpg";
import imgTestimonial2 from "../../assets/testimonials/testimonial2.jpg";
import imgTestimonial3 from "../../assets/testimonials/testimonial3.jpg";
import imgTestimonial4 from "../../assets/testimonials/testimonial4.jpg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import "../../styles/testimonials.css";

/**
 * The Testimonial component displays a slider of testimonials with images and text.
 * Users can navigate through the testimonials using arrow buttons or dots.
 */
const Testimonial = () => {
  const { language } = useContext(LanguageContext);

  // Define testimonial items with images and text
  const items = [
    {
      image: imgTestimonial1,
      text: Translation[language].testimonial1,
    },
    {
      image: imgTestimonial2,
      text: Translation[language].testimonial2,
    },
    {
      image: imgTestimonial3,
      text: Translation[language].testimonial3,
    },
    {
      image: imgTestimonial4,
      text: Translation[language].testimonial4,
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  // Function to show a specific slide
  const showSlide = (index) => {
    if (index < 0) {
      setSlideIndex(items.length - 1);
    } else if (index >= items.length) {
      setSlideIndex(0);
    } else {
      setSlideIndex(index);
    }
  };
  
  // Function to show the next slide
  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % items.length);
  };
  
  // Function to show the previous slide
  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="container-inner">
      <section className="testimonials">
        <div className="texts">
          <h2>{Translation[language].testimonialTitle}</h2>
          <p>{Translation[language].testimonialText}</p>
        </div>

        <div className="testimonial-slider">
          <div className="slider-container">
            <button className="prev-btn" onClick={prevSlide}>
              <KeyboardArrowLeftIcon />
            </button>

            {items.map((item, index) => (
              <div
                key={index}
                className={`item ${index === slideIndex ? "active" : ""}`}
              >
                <div className="img">
                  <img src={item.image} alt="" />
                </div>

                <div className="text">
                  <p>{item.text}</p>
                </div>
              </div>
            ))}

            <button className="next-btn" onClick={nextSlide}>
              <KeyboardArrowRightIcon />
            </button>
          </div>
        </div>

        <div className="dots">
          {items.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === slideIndex ? "active" : ""}`}
              onClick={() => showSlide(index)}
            ></span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
