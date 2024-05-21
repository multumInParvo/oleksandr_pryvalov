// Contact
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../Contact/Contact.scss';
import Brushes from '../../images/brushes.webp';

function Contact() {
    const [imageOpacity, setImageOpacity] = useState(1);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setImageOpacity(0.3);
        setIsLoaded(true);
    }, []);

    return (
        <div className={`contact ${isLoaded ? 'loaded' : ''}`}>
            <Helmet>
                <title>CONTACT | oleksandr pryvalov</title>
            </Helmet>
            <div className='contact-info'>
                <span className='contact-details'>E-MAIL ME</span>
                <span className='contact-details-color'>OLEKSANDRPRYV@GMAIL.COM</span>
                <span className='contact-details'>FOLLOW ME</span>
                <Link to="https://www.instagram.com/oleksandrpryv/" className='instagram-logo'><FontAwesomeIcon icon={faInstagram} /></Link>
            </div>
            <div className='contact-image-container'>
                <img src={Brushes} alt="artist brushes" className='contact-image' style={{ opacity: imageOpacity }} />
            </div>
        </div>
    );
}

export default Contact;
