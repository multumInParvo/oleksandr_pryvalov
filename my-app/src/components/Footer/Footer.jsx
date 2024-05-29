// Footer
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../Footer/Footer.scss';

function Footer() {
    return (
        <div className="footer">
            <div className='footer-text'>copyright © 2024
                <p className='footer-logo'>
                    <span className='footer-name'> OLEKSANDR</span>
                    <span className='footer-surname'>PRYVALOV</span>
                </p>
                <Link to="https://www.instagram.com/oleksandrpryv/" className='instagram-logo'><FontAwesomeIcon icon={faInstagram} /></Link>
            </div>
        </div>
    );
}

export default Footer;