// Works

import React, { useState, useEffect } from 'react';
import './Works.scss';
import House from '../../images/house.webp';
import Chamigny from '../../images/chamigny_church.webp';
import Chicken from '../../images/chicken.webp';
import Four from '../../images/four.webp';
import Helene from '../../images/helene.webp';
import Duck from '../../images/duck.webp';
import Gallery from '../../components/Gallery/Gallery';

function Works() {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const images = [Four, Chicken, Chamigny, House, Duck, Helene];

    const openModal = (index) => {
        setSelectedImageIndex(index);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    const nextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const previousImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    useEffect(() => {
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="gallery-container">
            {images.map((image, index) => (
                <div key={index} className="image-container" onClick={() => openModal(index)}>
                    <img className='individual-painting' src={image} alt={`Image ${index + 1}`} />
                </div>
            ))}
            {isModalOpen && (
                <Gallery
                    selectedImage={images[selectedImageIndex]}
                    onClose={closeModal}
                    onNext={nextImage}
                    onPrevious={previousImage}
                />
            )}
        </div>
    );
}

export default Works;
