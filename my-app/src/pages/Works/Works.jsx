// Works

import React, { useState, useEffect } from 'react';
import Paintings from '../../data/Paintings';
import './Works.scss';
import Gallery from '../../components/Gallery/Gallery';

function Works() {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        setSelectedImageIndex((prevIndex) => (prevIndex === Paintings.length - 1 ? 0 : prevIndex + 1));
    };

    const previousImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? Paintings.length - 1 : prevIndex - 1));
    };

    useEffect(() => {
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="gallery-container">
            {Paintings.map((painting, index) => (
                <div key={index} className="image-container" onClick={() => openModal(index)}>
                    <img className='individual-painting' src={painting.picture} alt={painting.description} />
                </div>
            ))}
            {isModalOpen && (
                <Gallery
                    painting={Paintings[selectedImageIndex]}
                    onClose={closeModal}
                    onNext={nextImage}
                    onPrevious={previousImage}
                />
            )}
        </div>
    );
}

export default Works;