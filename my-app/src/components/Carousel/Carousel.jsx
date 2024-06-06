import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Paintings from '../../data/Paintings';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Carousel/Carousel.scss';

const Carousel = () => {
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
        <div className="carousel">
            <Slider {...settings}>
                {Paintings.map((painting, index) => (
                    <div key={index} className="image-info-container">
                        <Link to={`/gallery/${index}`} className="image-info-container-link">
                            <img className="carousel-image" src={painting.picture} alt={painting.description} />
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
