// src/components/Gallery/Gallery.js
import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Gallery.scss';

const Gallery = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const initialIndex = parseInt(index, 10);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [paintings, setPaintings] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/paintings.json`)
      .then((response) => response.json())
      .then((data) => {
        setPaintings(data);
        setCurrentIndex(initialIndex);
      })
      .catch((error) => {
        console.error('Error fetching paintings:', error);
      });
  }, [initialIndex]);

  const settings = {
    initialSlide: initialIndex,
    infinite: true,
    speed: 320,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
  };

  const closeModal = () => {
    const from = location.state?.from || '/';
    navigate(from);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const handlePrevClick = (e) => {
    e.stopPropagation();
    sliderRef.current.slickPrev();
  };

  const handleNextClick = (e) => {
    e.stopPropagation();
    sliderRef.current.slickNext();
  };

  return (
    paintings.length > 0 && (
      <div className="lightbox-overlay" onClick={closeModal}>
        <div className="lightbox" onClick={stopPropagation}>
          <Slider ref={sliderRef} {...settings}>
            {paintings.map((painting, idx) => (
              <img key={idx} src={painting.picture} alt={painting.title} />
            ))}
          </Slider>
        </div>
        <button className="close-button" onClick={closeModal}>×</button>
        <button className="nav-button prev-button" onClick={handlePrevClick}>‹</button>
        <button className="nav-button next-button" onClick={handleNextClick}>›</button>
        <div className="painting-details">
          <p>{paintings[currentIndex].title}<strong>|</strong></p>
          <p>{paintings[currentIndex].medium}<strong>|</strong></p>
          <p>{paintings[currentIndex].dimensions}<strong>|</strong></p>
          <p>{paintings[currentIndex].year}</p>
        </div>
      </div>
    )
  );
};

export default Gallery;
