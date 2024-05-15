// Gallery 

import React from 'react';
import '../Gallery/Gallery.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';

function Gallery({ painting, onClose, onNext, onPrevious }) {
    return (
        <div className="gallery-modal">
            <span className="close-button" onClick={onClose}><FontAwesomeIcon icon={faXmark} /></span>
            <span className="button-left" onClick={onPrevious}><FontAwesomeIcon icon={faChevronLeft} /></span>
            <img className="selected-image" src={painting.picture} alt={painting.description} />
            <span className="button-right" onClick={onNext}><FontAwesomeIcon icon={faChevronRight} /></span>
            <div className="painting-details">
                <p>{painting.title}<strong>|</strong></p>
                <p>{painting.medium}<strong>|</strong></p>
                <p>{painting.dimensions}<strong>|</strong></p>
                <p>{painting.year}</p>
            </div>
        </div>
    );
}

export default Gallery;
