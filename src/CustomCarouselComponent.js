import React, { useState, useEffect } from 'react';
import './CustomCarouselComponent.css'; // You can create a separate CSS file for this component if needed

const CustomCarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      id: 1,
      imageUrl: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-29042024-TopBrandBanner-Z3-P5-Bullmer-Min70.jpg",
      altText: "Slide 1"
    },
    {
      id: 2,
      imageUrl: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-29042024-TopBrandBanner-Z3-P3-Nike-skechers-UPTO40.jpg",
      altText: "Slide 2"
    },
    {
        id: 3,
        imageUrl: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-29042024-TopBrandBanner-Z3-P2-SHOWOFF-ORCHIDBLUS-MIN65.jpg",
        altText: "Slide 3"
      },
      {
        id: 4,
        imageUrl: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-29042024-TopBrandBanner-Z3-P5-Jockey-Zivame-Under699.jpg",
        altText: "Slide 4"
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

export default CustomCarouselComponent;
