// Gallery.js
import React from 'react';
import '../Gallery/Gallery.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Gallery({ selectedImage, onClose, onNext, onPrevious }) {
  
    return (
        <div className="gallery-modal">
            <span className="close-button" onClick={onClose}><FontAwesomeIcon icon={faXmark} /></span>
            <span className="button-left" onClick={onPrevious}><FontAwesomeIcon icon={faChevronLeft} /></span>
            <img className="selected-image" src={selectedImage} alt="Selected Image" />
            <span className="button-right" onClick={onNext}><FontAwesomeIcon icon={faChevronRight} /></span>
        </div>
    );
}

export default Gallery;