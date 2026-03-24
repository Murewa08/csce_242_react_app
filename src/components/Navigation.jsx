import "../css/Navigation.css";
import {Link} from "react-router-dom";
import {useState} from "react";
const Navigation = () => {
    const[menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
    };
    return (
        <nav id="main-nav">
            <a id="toggle-nav" onClick={toggleMenu} href="#">
                {menuOpen?(<p>&#8963;</p>):(<p>&#8964;</p>)}
            </a>
            <ul className={menuOpen?"columns":"hide-small"}>
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