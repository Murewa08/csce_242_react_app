import "../css/MHome.css";
import NewYorkImage from "../images/NewYorkImage.png";
import HeaderImage from "../images/HeaderImage.png";
import TokyoImage from "../images/TokyoImage.png";
import BaliImage from "../images/BaliImage.png";
import EnglandImage from "../images/EnglandImage.webp";
import SwitzerlandImage from "../images/SwitzerlandImage.webp";
import AustraliaImage from "../images/AustraliaImage.jpg";

const MHelp = () => {
    return (
    <body id="content">
        <main id="page-content-mhome">
            <img id="header-img" src={HeaderImage}/>
            <div class="destinations-row">
                <div class="dest-info">
                    <a href="help-index.html">
                        <img src={NewYorkImage}/>
                    </a>
                    <a href="help-index.html">
                        <p>New York, US</p>
                    </a>
                </div>
                <div class="dest-info">
                    <img src={TokyoImage}/>
                    <p>Tokyo, Japan</p>
                </div>
                <div class="dest-info">
                    <img src={BaliImage}/>
                    <p>Bali, Indonesia</p>
                </div>
            </div>
            <div class="destinations-row" id="row-2">
                <div class="dest-info">
                    <img src={EnglandImage}/>
                    <p>England, UK</p>
                </div>
                <div class="dest-info">
                    <img src={SwitzerlandImage}/>
                    <p>Bern, Switzerland</p>
                </div>
                <div class="dest-info">
                    <img src={AustraliaImage}/>
                    <p>Sydney, Australia</p>
                </div>
            </div>
            <p id="main-question">Ready to plan your next Adventure?</p>
        </main>
        <footer>
            <a id="btn-account" href="#">Create An Account Today</a>
            <p id="login-link">Already Have One? <a href="#">Login Here</a></p>
            <p>&copy; 2026 Meradiya. All rights reserved.</p>
        </footer>
    </body>
    );
    }

export default MHelp;