import React, { useState, useEffect } from 'react';
import './NewCarouselComponent.css';

const NewCarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Using activeIndex instead of currentSlide
  const slides = [
    {
      id: 1,
      imageUrl: "https://assets.ajio.com/cms/AJIO/WEB/1440x128-%20UHP%20web%20RRL_SBI.jpg",
      altText: "Slide 1"
    },
    {
      id: 2,
      imageUrl: "https://assets.ajio.com/cms/AJIO/WEB/71x21-rev%20(9).jpg",
      altText: "Slide 2"
    },
    
    
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId); // Clear the interval when the component unmounts
  }, []);

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        {slides.map((slide, index) => (
          <li
            key={slide.id}
            data-target="#carouselExampleIndicators"
            data-slide-to={index}
            className={index === activeIndex ? "active" : ""}
          ></li>
        ))}
      </ol>
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          >
            <img src={slide.imageUrl} className="d-block w-100" alt={slide.altText} />
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
        onClick={prevSlide}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
        onClick={nextSlide}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default NewCarouselComponent;
