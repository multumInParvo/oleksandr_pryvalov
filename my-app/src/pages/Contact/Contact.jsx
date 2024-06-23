// Contact //
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Form from '../../components/Form/Form';
import '../Contact/Contact.scss';

function Contact() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>CONTACT | oleksandr pryvalov</title>
            </Helmet>
            <h1 className='title-contact'>Contact</h1>
            <div className='contact-container'>
                <div className='info-container'>
                    <div className='contact-info'>
                        <span className='contact-detail-title'>E-MAIL ME</span>
                        <span className='contact-detail'>oleksandrpryv@gmail.com</span>
                        <span className='contact-detail-title'>FOLLOW ME</span>
                        <Link to="https://www.instagram.com/oleksandrpryv/" className='instagram-logo'><FontAwesomeIcon icon={faInstagram} /></Link>
                        <span className='contact-detail-title'>ASK ME ANYTHING</span>
                    </div>
                    <Form />
                </div>
            </div>
        </HelmetProvider>
    );
}

export default Contact;
