// Header
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <div>
                <Link to="/">
                    <span>OLEKSANDR</span>
                    <span>PRYVALOV</span>
                </Link>
            </div>
            <div className="right-side">
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
}

export default Header;