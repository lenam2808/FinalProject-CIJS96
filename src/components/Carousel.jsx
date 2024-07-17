/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Carousel.css";

const images = [
  {
    img: "./insideout2.jpg&quot",
  },
  {
    img: "./apes.jpg&quot",
  },
  {
    img: "./monkeyman.jpg&quot",
  },
  {
    img: "./furiosa.jpg&quot",
  },
  {
    img: "./kongxgozilla.jpg&quot",
  },
  {
    img: "./garfield.jpg&quot",
  },
];

const Carousel = () => {
  const [image, setImage] = useState(images);
  const [slide, setSlide] = useState(0);
  console.log(image);

  const nextSlide = () => {
    setSlide(slide === image.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? image.length - 1 : slide - 1);
  };

  return (
    <>
      <div className="carousel">
        <BsArrowLeftCircleFill
          className="arrow arrowLeft"
          onClick={prevSlide}
        />
        <div className="slider">
        {image.map((item, idx) => {
          return (
            <img
              key={idx}
              src={item.img}
              className={slide === idx ? "slide" : "slide hidden"}
            />
          );
        })}
        </div>
        <BsArrowRightCircleFill
          className="arrow arrowRight"
          onClick={nextSlide}
        />
        <span className="indicators">
          {image.map((_, idx) => {
            return (
              <button
                key={idx}
                onClick={() => setSlide(idx)}
                className={slide === idx ? "indicator" : "indicator inactive"}
              ></button>
            );
          })}
        </span>
      </div>
    </>
  );
};

export default Carousel;
