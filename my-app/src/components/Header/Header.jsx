// Header
import React from 'react';
import '../Header/Header.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Header() {
    return (
        <nav>
            <div className='logo'>
                <Link to="/" className='logo-name-surname'>
                    <span className='logo-name'>OLEKSANDR </span>
                    <span className='logo-surname'>PRYVALOV</span>
                </Link>
            </div>
            <div className="menu">
                <Link to="/portfolio" className='menu-links'>PORTFOLIO</Link>
                <Link to="/about" className='menu-links'>ABOUT</Link>
                <Link to="/contact" className='menu-links'>CONTACT</Link>
                <Link to="/about" className='menu-links'><FontAwesomeIcon icon={faInstagram} /></Link>
            </div>
        </nav>
    );
}

export default Header;