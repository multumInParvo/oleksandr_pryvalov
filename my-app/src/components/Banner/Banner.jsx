// Banner
import React from 'react';
import Painter from '../../images/painter.webp';
import '../Banner/Banner.scss'

function Banner() {
    return (
        <div className="banner">
            <img className='banner-image' src={Painter} />
        </div>
    );
}

export default Banner;