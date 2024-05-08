// Header
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';

function Header() {
    return (
        <nav>
            <div className='left'>
                <Link to="/">OLEKSANDR PRYVALOV</Link>
            </div>
            <div className="right">
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about"><FontAwesomeIcon icon={faInstagram} /></Link>
            </div>
        </nav>
    );
}

export default Header;