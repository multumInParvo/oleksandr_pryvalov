// Carousel.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Chamigny from '../../images/chamigny_church.webp';
import Duck from '../../images/duck.webp';
import Helene from '../../images/helene.webp';
import Chicken from '../../images/chicken.webp';
import House from '../../images/house.webp';
import Five from '../../images/five.webp';
import '../Carousel/Carousel.scss';

const images = [House, Duck, Helene, Five, Chicken, Chamigny];
const intervalDuration = 6000;

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
                {images.map((image, index) => (
                    <img
                        key={index}
                        className={`carousel-image ${index === currentImageIndex ? (fadeIn ? 'fade-in' : '') : (fadeOut ? 'fade-out' : '')
                            }`}
                        src={image}
                        alt={`Image ${index + 1}`}
                    />
                ))}
            </Link>
        </div>
    );
}

export default Carousel;