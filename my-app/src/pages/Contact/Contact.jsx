// Contact//
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../Contact/Contact.scss';
import Brushes from '../../images/brushes.webp';

function Contact() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>CONTACT | oleksandr pryvalov</title>
            </Helmet>
            <div className='contact-container'>
                <div className='deco-line'></div>
                <div className='info-image-container'>
                    <div className='contact-info'>
                        <span className='contact-details'>E-MAIL ME</span>
                        <span className='contact-details-color'>OLEKSANDRPRYV@GMAIL.COM</span>
                        <span className='contact-details'>FOLLOW ME</span>
                        <Link to="https://www.instagram.com/oleksandrpryv/" className='instagram-logo'><FontAwesomeIcon icon={faInstagram} /></Link>
                    </div>
                    <img src={Brushes} alt="artist brushes" className='contact-image' />
                </div>
            </div>
        </HelmetProvider>
    );
}

export default Contact;
