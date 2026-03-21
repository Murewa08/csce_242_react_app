import "../css/MHome.css";
import NewYorkImage from "../images/NewYorkImage.png";
import HeaderImage from "../images/HeaderImage.png";

const MHelp = () => {
    return (
    <body id="content">
        <main id="page-content">
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
                    <img src={"../src/images/Tokyo Image.png"}/>
                    <p>Tokyo, Japan</p>
                </div>
                <div class="dest-info">
                    <img src={"../src/images/Bali Image.png"}/>
                    <p>Bali, Indonesia</p>
                </div>
            </div>
            <div class="destinations-row" id="row-2">
                <div class="dest-info">
                    <img src={"../src/images/England image.webp"}/>
                    <p>England, UK</p>
                </div>
                <div class="dest-info">
                    <img src={"../src/images/Switzerland image.webp"}/>
                    <p>Bern, Switzerland</p>
                </div>
                <div class="dest-info">
                    <img src={"../src/images/Australia image.jpg"}/>
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