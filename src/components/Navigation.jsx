import "../css/Navigation.css";
import {Link} from "react-router-dom";
import {useState} from "react";
const Navigation = () => {

    return (
        <nav id="main-nav">
            <div id="nav-toggle">
                <button id="toggle-open" className="toggle">Open &rarr;</button>
                <button id="toggle-close" className="toggle">Close &larr;</button>
            </div>
            <ul>
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