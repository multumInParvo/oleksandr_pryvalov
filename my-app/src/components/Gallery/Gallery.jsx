// Gallery
import React from 'react';
import '../styles/Gallery.css';
import One from '../images/one.webp';
import Two from '../images/two.webp';
import Three from '../images/three.webp';
import Four from '../images/four.webp';
import Five from '../images/five.webp';
import Six from '../images/six.webp';

function Gallery() {
    return (
      <div className="image-gallery">
        <img src={One} alt="house-one" />
        <img src={Two} alt="house-two" />
        <img src={Three} alt="house-three" />
        <img src={Four} alt="house-four" />
        <img src={Five} alt="house-five" />
        <img src={Six} alt="house-six" />
      </div>
    );
  }

export default Gallery;