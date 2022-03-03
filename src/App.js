import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import testimonials from "./assets/data/testimonials";
//https://www.youtube.com/watch?v=uhZ22CXp7Wc

// do animacji uzyto npm i react-transition-group

function App() {
  // activeIndex odpowiada nam tu za pierwszy obiekt w tablicy testimonials ktory chcemy wyswietlic
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeDot, setActiveDot] = useState(true);

  const activeSlide = testimonials[activeIndex];

  // function handleNext() {
  //   // jesli klikamy next spr czy to jest ostatni nasz testimonial, jesli to jest ostatni, tzn ze nie ma nastepnego wiec trzeba zaczac od 0
  //   if (activeIndex >= testimonials.length - 1) {
  //     setActiveIndex(0);
  //   } else {
  //     //zwiekszamy o jeden
  //     setActiveIndex((oldIndex) => oldIndex + 1);
  //   }
  // }
  // function handlePrev() {
  //   // jesli klikamy prev czyli spr czy jestesmy na 1 testimonial jesli jestesmy to musimy odpalic ostatniy testimonial
  //   if (activeIndex <= 0) {
  //     setActiveIndex(testimonials.length - 1);
  //   } else {
  //     //zwiekszamy o jeden
  //     setActiveIndex((oldIndex) => oldIndex - 1);
  //   }
  // }

  useEffect(() => {
    const interval = setInterval(() => {
      //jest ostatni nasz testimonial, jesli to jest ostatni, tzn ze nie ma nastepnego wiec trzeba zaczac od 0
      if (activeIndex >= testimonials.length - 1) {
        setActiveIndex(0);
        setActiveDot(true);
      } else {
        //zwiekszamy o jeden
        setActiveIndex((oldIndex) => oldIndex + 1);
        setActiveDot(false);
      }
    }, 4000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div className="container-block">
      <div className="section-title">
        <h2>Tytul</h2>
      </div>
      <div className="testimonial-wrapper">
        <SwitchTransition>
          <CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
            <div className="testimonial-info">
              <div className="testimonial-small-title">
                <p className="small-title"></p>
              </div>
              <div className="testimonial-desc">
                <p className="testimonial-review-text">{activeSlide.desc}</p>
                <div className="testimonials-dots"></div>
              </div>
              <div className="testimonial-name-box">
                <p className="testimonial-name-description">
                  {activeSlide.name}
                </p>
              </div>

              {/* <div className="arrows">
                <div
                  classname="next"
                  onClick={handleNext}
                  role="button"
                  tabIndex={0}
                  onKeyDown={handleNext}
                >
                  + next
                </div>
                <div
                  classname="prev"
                  onClick={handlePrev}
                  role="button"
                  tabIndex={0}
                  onKeyDown={handlePrev}
                >
                  - prev
                </div>
              </div> */}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
      <div className="dots">
        {testimonials.map((testimonial, index) => {
          return (
            <div
              key={testimonial.id}
              className={`${index === activeIndex ? " dot active" : "dot"}`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
