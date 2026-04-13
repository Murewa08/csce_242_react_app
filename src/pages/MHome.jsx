import "../css/MHome.css";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import NewYorkImage from "../images/NewYorkImage.png";
import HeaderImage from "../images/HeaderImage.png";
import TokyoImage from "../images/TokyoImage.png";
import BaliImage from "../images/BaliImage.png";
import EnglandImage from "../images/EnglandImage.webp";
import SwitzerlandImage from "../images/SwitzerlandImage.webp";
import AustraliaImage from "../images/AustraliaImage.jpg";

const MHome = () => {
    const [showModal, setShowModal] = useState(false);

    return (
    <div id="content">
        <main id="page-content-mhome">
            <img id="header-img" src={HeaderImage}/>
            <button id="add-dest-btn">+ Add Destination</button>
            <div className="destinations-row">
                <div className="dest-info" onClick={() => setShowModal(true)}>
                    <img src={NewYorkImage}/>
                    <p>New York, US</p>
                </div>
                <div className="dest-info" onClick={() => setShowModal(true)}>
                    <img src={TokyoImage}/>
                    <p>Tokyo, Japan</p>
                </div>
                <div className="dest-info" onClick={() => setShowModal(true)}>
                    <img src={BaliImage}/>
                    <p>Bali, Indonesia</p>
                </div>
            </div>
            <div className="destinations-row" id="row-2">
                <div className="dest-info" onClick={() => setShowModal(true)}>
                    <img src={EnglandImage}/>
                    <p>England, UK</p>
                </div>
                <div className="dest-info" onClick={() => setShowModal(true)}   >
                    <img src={SwitzerlandImage}/>
                    <p>Bern, Switzerland</p>
                </div>
                <div className="dest-info" onClick={() => setShowModal(true)}>
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
        {showModal && 
        (<div className="modal">
            <button id="close-button" onClick={() => setShowModal(false)}>X</button>
            <p>This is the modal content.</p>
        </div>)} 
    </div>
    );
    }

export default MHome;