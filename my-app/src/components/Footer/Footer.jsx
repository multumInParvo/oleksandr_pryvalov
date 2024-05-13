// Footer
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../Footer/Footer.scss';

function Footer() {
    return (
        <div className="footer">
            <p className='footer-text'>Copyright © 2024
                <span className='footer-name'> OLEKSANDR</span>
                <span className='footer-surname'>PRYVALOV</span>
                <Link to="https://www.instagram.com/oleksandrpryv/" className='instagram-logo'><FontAwesomeIcon icon={faInstagram} /></Link>
            </p>
        </div>
    );
}

export default Footer;