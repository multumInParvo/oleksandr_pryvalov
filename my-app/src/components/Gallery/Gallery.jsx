import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import { Navigation, Pagination, A11y } from 'swiper/modules';
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
          <div className="lightbox" onClick={stopPropagation}>
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={0}
              slidesPerView={1}
              initialSlide={initialIndex}
              loop={true} 
              onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)} 
              pagination={{ clickable: true }}
              navigation
              touchStartPreventDefault={false}
            >
              {paintings.map((painting, idx) => (
                <SwiperSlide key={idx}>
                  <img src={painting.picture} alt={painting.title} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button className="close-button" onClick={closeModal}>×</button>
          <div className="painting-details">
            <p>{paintings[currentIndex].title}<strong>|</strong></p>
            <p>{paintings[currentIndex].medium}<strong>|</strong></p>
            <p>{paintings[currentIndex].dimensions}<strong>|</strong></p>
            <p>{paintings[currentIndex].year}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
