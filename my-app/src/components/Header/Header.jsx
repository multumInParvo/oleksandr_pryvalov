import React, { useState, useRef, useEffect } from 'react';
import '../Header/Header.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const slideMenuRef = useRef(null);
    const overlayRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleClickOutside = (event) => {
        if (
            (overlayRef.current && !overlayRef.current.contains(event.target)) &&
            (!slideMenuRef.current || !slideMenuRef.current.contains(event.target))
        ) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav>
            <div className='logo'>
                <Link to="/" className='logo-name-surname'>
                    <span className='logo-name'>OLEKSANDR</span>
                    <span className='logo-surname'>PRYVALOV</span>
                </Link>
            </div>
            <div className="menu">
                <Link to="/works" className='menu-links'>WORKS</Link>
                <Link to="/about" className='menu-links'>ABOUT</Link>
                <Link to="/contact" className='menu-links'>CONTACT</Link>
                <Link to="https://www.instagram.com/oleksandrpryv/" className='instagram-logo'>
                    <FontAwesomeIcon icon={faInstagram} />
                </Link>
            </div>
            <span className='menu-icon' onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </span>
            <div className={`slide-menu ${menuOpen ? 'open' : ''}`} ref={slideMenuRef}>
                <Link to="/works" className='menu-links' onClick={toggleMenu}>WORKS</Link>
                <Link to="/about" className='menu-links' onClick={toggleMenu}>ABOUT</Link>
                <Link to="/contact" className='menu-links' onClick={toggleMenu}>CONTACT</Link>
                <Link to="https://www.instagram.com/oleksandrpryv/" className='instagram-logo' onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <span className='close-icon' onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faXmark} />
                </span>
            </div>
            <div className={`overlay ${menuOpen ? 'show' : ''}`} onClick={toggleMenu} ref={overlayRef}></div>
        </nav>
    );
}

export default Header;
