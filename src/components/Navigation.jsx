import "../css/Navigation.css";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav id="main-nav">
            <ul className="columns">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;