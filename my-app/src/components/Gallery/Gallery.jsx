import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { useParams, useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import Paintings from '../../data/Paintings';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Gallery.scss';

const Gallery = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  const initialIndex = parseInt(index, 10);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const sliderRef = useRef(null);

  useEffect(() => {
    setCurrentIndex(initialIndex);
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
    navigate('/');
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

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => sliderRef.current.slickNext(),
    onSwipedRight: () => sliderRef.current.slickPrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="lightbox-overlay">
      <div className="lightbox" onClick={stopPropagation} {...swipeHandlers}>
        <Slider ref={sliderRef} {...settings}>
          {Paintings.map((painting, idx) => (
            <img key={idx} src={painting.picture} alt={painting.title} />
          ))}
        </Slider>
      </div>
      <button className="close-button" onClick={closeModal}>×</button>
      <button className="nav-button prev-button" onClick={handlePrevClick}>‹</button>
      <button className="nav-button next-button" onClick={handleNextClick}>›</button>
      <div className="painting-details">
        <p>{Paintings[currentIndex].title}<strong>|</strong></p>
        <p>{Paintings[currentIndex].medium}<strong>|</strong></p>
        <p>{Paintings[currentIndex].dimensions}<strong>|</strong></p>
        <p>{Paintings[currentIndex].year}</p>
      </div>
    </div>
  );
};

export default Gallery;
