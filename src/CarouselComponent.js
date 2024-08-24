import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Carousel.css';

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      imageUrl: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-18042024-MainBannerDailyChanging-Z1-P1-megasummersale-5080.gif",
      altText: "Slide 1",
      routePath: "/megasummersale"
    },
    {
      id: 2,
      imageUrl: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-23042024-MainBannerDailyChanging-Z1-P4-puma-reebok-min50.jpg",
      altText: "Slide 2",
      routePath: "/puma-reebok"
    },
    {
      id: 3,
      imageUrl: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP23042024-TopBrandBanner-Z3-P5-misschase-differenceof-opinion-flat65.jpg",
      altText: "Slide 3",
      routePath: "/misschase"
    },
    {
      id: 4,
      imageUrl: "https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-23042024-MainBannerDailyChanging-Z1-P7-rayban-voyage-min50.jpg",
      altText: "Slide 4",
      routePath: "/rayban"
    },
    {
      id: 5,
      imageUrl: "https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-23042024-MainBannerDailyChanging-Z1-P2-superdry-min50.jpg",
      altText: "Slide 5",
      routePath: "/superdry"
    },
    {
      id: 6,
      imageUrl: "https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-23042024-MainBannerDailyChanging-Z1-P6-ax-gap-upto30.jpg",
      altText: "Slide 6",
      routePath: "/ax-gap"
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
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
            className={index === currentSlide ? "active" : ""}
          ></li>
        ))}
      </ol>
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div key={slide.id} className={`carousel-item ${index === currentSlide ? "active" : ""}`}>
            <Link to={slide.routePath}>
              <img src={slide.imageUrl} className="d-block w-100" alt={slide.altText} />
            </Link>
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

export default CarouselComponent;