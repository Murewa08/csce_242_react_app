import "../css/Navigation.css";
import {Link} from "react-router-dom";
import {useState} from "react";
const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openNav = () => setIsOpen(true);
    const closeNav = () => setIsOpen(false);
    return (
        <nav id="main-nav">
            <div id="nav-toggle">
                {!isOpen && (<button id="toggle-open" className="toggle" onClick={openNav}>Open &rarr;</button>)}
                {isOpen && (<button id="toggle-close" className="toggle" onClick={closeNav}>Close &larr;</button>)}
            </div>
            <ul className={isOpen ? "nav-open" : ""}>
                {/*<li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>*/}
                <li><Link to="/MHome">Home</Link></li>
                <li><Link to="Reviews">Reviews</Link></li>
                <li><Link to="About Us">About Us</Link></li>
                <li><Link to="FAQ">FAQ</Link></li>
                <li><Link to="/Help">Help</Link></li>
                {/*<li><Link to="/Listings">Listings</Link></li>*/}
            </ul>
        </nav>
    );
};

export default Navigation;