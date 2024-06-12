// Header //
import React, { useState, useRef, useEffect } from 'react';
import '../Header/Header.scss';
import { Link } from 'react-router-dom';

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
                    <span className='logo-name'>Oleksandr</span>
                    <span className='logo-surname'>Pryvalov</span>
                </Link>
            </div>
            <div className="menu">
                <Link to="/about" className='menu-links'>ABOUT</Link>
                <Link to="/works" className='menu-links'>WORKS</Link>
                <Link to="/contact" className='menu-links'>CONTACT</Link>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className={`slide-menu ${menuOpen ? 'open' : ''}`} ref={slideMenuRef}>
                <Link to="/about" className='menu-links' onClick={toggleMenu}>ABOUT</Link>
                <Link to="/works" className='menu-links' onClick={toggleMenu}>WORKS</Link>
                <Link to="/contact" className='menu-links' onClick={toggleMenu}>CONTACT</Link>
                <button className='close-button-menu' onClick={toggleMenu}>
                    ×
                </button>
            </div>
            <div className={`overlay ${menuOpen ? 'show' : ''}`} onClick={toggleMenu} ref={overlayRef}></div>
        </nav>
    );
}

export default Header;
