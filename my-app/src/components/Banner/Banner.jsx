// Banner.js
import React, { useState, useEffect } from 'react';
import Chamigny from '../../images/chamigny church.webp';
import Duck from '../../images/duck.webp';
import Helene from '../../images/helene.webp';
import Chicken from '../../images/chicken.webp';
import '../Banner/Banner.scss';

const images = [Duck, Helene, Chicken, Chamigny];
const intervalDuration = 6000;

function Banner() {
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
        <div className="banner">
            <div className="image-container">
                {images.map((image, index) => (
                    <img
                        key={index}
                        className={`banner-image ${index === currentImageIndex ? (fadeIn ? 'fade-in' : '') : (fadeOut ? 'fade-out' : '')
                            }`}
                        src={image}
                        alt={`Image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Banner;