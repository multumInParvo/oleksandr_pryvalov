// Gallery 

import React, { useState, useEffect } from 'react';
import '../Gallery/Gallery.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';

function Gallery({ painting, onClose, onNext, onPrevious }) {
  const [fadeInOut, setFadeInOut] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  useEffect(() => {
    setCurrentImageIndex(painting);
  }, [painting]);

  const nextImage = () => {
    setFadeInOut(true);
    setTimeout(() => {
      onNext();
      setFadeInOut(false);
    }, 150);
  };

  const previousImage = () => {
    setFadeInOut(true);
    setTimeout(() => {
      onPrevious();
      setFadeInOut(false);
    }, 150);
  };

  return (
    <div className="gallery-modal">
      <span className="close-button" onClick={onClose}>
        <FontAwesomeIcon icon={faXmark} />
      </span>
      <span className="button-left" onClick={previousImage}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </span>
      {currentImageIndex && (
        <img
          className={`selected-image ${fadeInOut ? 'fade-out' : 'fade-in'}`}
          src={currentImageIndex.picture}
          alt={currentImageIndex.description}
        />
      )}
      <span className="button-right" onClick={nextImage}>
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
      {currentImageIndex && (
        <div className="painting-details">
          <p>{currentImageIndex.title}<strong>|</strong></p>
          <p>{currentImageIndex.medium}<strong>|</strong></p>
          <p>{currentImageIndex.dimensions}<strong>|</strong></p>
          <p>{currentImageIndex.year}</p>
        </div>
      )}
    </div>
  );
}

export default Gallery;