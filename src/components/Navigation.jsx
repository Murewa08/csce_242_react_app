import "../css/Navigation.css";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav id="main-nav">
            <ul className="columns">
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