// Carousel //
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Carousel/Carousel.scss';

const Carousel = () => {
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/paintings.json`)
      .then((response) => response.json())
      .then((data) => setPaintings(data))
      .catch((error) => console.error('Error fetching paintings:', error));
  }, []);

  const settings = {
    arrows: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
  };

  return (
    paintings.length > 0 && (
      <div className="carousel">
        <Slider {...settings}>
          {paintings.map((painting, index) => (
            <div key={index} className="image-info-container">
              <img
                className="carousel-image"
                src={painting.picture}
                alt={painting.description}
              />
            </div>
          ))}
        </Slider>
      </div>
    )
  );
};

export default Carousel;