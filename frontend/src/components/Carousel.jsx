import React from "react";
import chevron from "../assets/icons/chevron-down.svg";
import styles from "./Carousel.module.css";

const Carousel = ({ slides, cardWidth, numPerSlides, title }) => {
  const [position, setPosition] = React.useState(0);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const totalSlides = slides.length;
  let percentage =
    ((cardWidth + 40) / (totalSlides * cardWidth + 40 * (totalSlides - 1))) *
    100;

  const nextSlide = () => {
    setPosition((pos) => pos - percentage);
    setCurrentSlide((prev) => prev + 1);
    if (currentSlide >= totalSlides - numPerSlides) {
      setPosition((pos) => pos + percentage);
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const prevSlide = () => {
    setPosition((pos) => pos + percentage);
    setCurrentSlide((prev) => prev - 1);
    if (currentSlide <= 0) {
      setPosition((pos) => pos - percentage);
      setCurrentSlide((prev) => prev + 1);
    }
  };
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <section className={styles.carousel}>
        <button className={styles.prev} onClick={prevSlide}>
          <img src={chevron} />
        </button>
        <div className={styles.wrapper}>
          <div
            className={styles.inner}
            style={{ transform: `translateX(${position}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className={styles.card}
                style={{ width: `${cardWidth}px` }}
              >
                <img src={`${slide}`} />
              </div>
            ))}
          </div>
        </div>

        <button className={styles.next} onClick={nextSlide}>
          <img src={chevron} />
        </button>
      </section>
    </>
  );
};

export default Carousel;
