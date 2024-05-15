// Carousel.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Paintings from '../../data/Paintings';
import '../Carousel/Carousel.scss';

const intervalDuration = 6000;
const images = Paintings.map((painting) => painting.picture);

function Carousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);
    const [fadeIn, setFadeIn] = useState(true);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setFadeOut(false);
            setTimeout(() => {
                setCurrentImageIndex(prevIndex =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
                setFadeIn(true);
                setFadeOut(false);
            }, 1000);
        }, intervalDuration);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="carousel">
            <Link to="/works" className="image-container">
                {Paintings.map((painting, index) => (
                    <img
                        key={index}
                        className={`carousel-image ${index === currentImageIndex ? (fadeIn ? 'fade-in' : '') : (fadeOut ? 'fade-out' : '')
                            }`}
                        src={painting.picture}
                        alt={painting.description}
                    />
                ))}
            </Link>
        </div>
    );
}

export default Carousel;