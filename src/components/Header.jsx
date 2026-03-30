import "../css/Header.css";
import Navigation from "./Navigation";

const Header = () => {
    return (
        <header id="main-header">
            <h1>Meradiya - Find Your Paradise</h1>
            <div id="nav-toggle">
                <button id="toggle-open" className="toggle">Open &rarr;</button>
                <button id="toggle-close" className="toggle">Close &larr;</button>
            </div>
            <Navigation />
        </header>
    );
};

export default Header;