import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/a11y';
import { Navigation, A11y } from 'swiper/modules';
import './Gallery.scss';

const Gallery = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const initialIndex = parseInt(index, 10);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [paintings, setPaintings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.PUBLIC_URL}/paintings.json`)
      .then((response) => response.json())
      .then((data) => {
        setPaintings(data);
        setCurrentIndex(initialIndex);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching paintings:', error);
        setIsLoading(false);
      });
  }, [initialIndex]);

  const closeModal = () => {
    const from = location.state?.from || '/';
    navigate(from);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`gallery-container ${isLoading ? 'loading' : ''}`}>
      {paintings.length > 0 && (
        <div className="lightbox-overlay">
          <div className="close-return-button-container">
            <button className="return-button" onClick={closeModal}></button>
            <button className='close-button' onClick={closeModal}>×</button>
          </div>
          <div className="lightbox" onClick={stopPropagation}>
            <Swiper
              modules={[Navigation, A11y]}
              spaceBetween={0}
              slidesPerView={1}
              initialSlide={initialIndex}
              loop={true}
              onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
              navigation
              touchStartPreventDefault={false}
            >
              {paintings.map((painting, idx) => (
                <SwiperSlide key={idx}>
                  <img src={painting.picture} alt={painting.title} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="painting-container">
              <p className="painting-title">{paintings[currentIndex].title}</p>
              <div className="painting-details">
                <p>{paintings[currentIndex].medium}<strong>|</strong></p>
                <p>{paintings[currentIndex].dimensions}<strong>|</strong></p>
                <p>{paintings[currentIndex].year}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
