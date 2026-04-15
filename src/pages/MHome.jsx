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
    const [showDestModal, setShowDestModal] = useState(false);
    const [destinations, setDestinations] = useState([]);
    const [selectedDestination, setSelectedDestination] = useState(null);

    useEffect(() => {fetch("https://csce-242-demo-backend.onrender.com/api/destinations").then((res) => res.json())
            .then((data) => setDestinations(data))
            .catch((err) => console.error(err));
                    }, []);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];

        const validTypes = ["image/jpeg", "image/png"];

        if(!validTypes.includes(file.type))
        {
            alert("Invalid file type. Please upload a JPEG or PNG image.");
            return;
        }

        setFormData({...formData, image: file});
    };

    const [formData, setFormData] = useState({
        city: "",
        country: "",
        description: "",
        image: null
    });

    return (
    <div id="content">
        <main id="page-content-mhome">
            <img id="header-img" src={HeaderImage}/>
            <button id="previous" className="arrows" type="button">&lt;</button>
            <button id="add-dest-btn" onClick={() => setShowDestModal(true)}>+ Add Destination</button>
            <button id="next" className="arrows" type="button">&gt;</button>
            <div className="destinations-row">
                <div className="dest-info" onClick={() => setSelectedDestination({
                    city: "New York City",
                    country: "United States",
                    description: "New York City is one of the most iconic cities in the world, known for its towering skyline, diverse culture, and nonstop energy. From the bright lights of Times Square to the peaceful paths of Central Park, the city offers something for everyone.",
                    image: NewYorkImage})}>

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
        {selectedDestination && 
        (<div className="modal">
            <div id="modal-content">
                <img src={selectedDestination.image} alt={selectedDestination.city}/>
                <div id="modal-info">
                    <button id="modal-close-button" onClick={() => setSelectedDestination(null)}>X</button>
                    <h2>City: {selectedDestination.city}</h2>
                    <h2>Country: {selectedDestination.country}</h2>
                    <p>Description: {selectedDestination.description}</p>
                </div>
            </div>
        </div>)}

        {showDestModal && (
            <div className="form-modal">
                <button id="form-close-button" onClick={() => setShowDestModal(false)}>X</button>
                <p>Add A Destination</p>
                <form>
                    <div className="form-section">
                        <label>City: </label>
                        <input type="text" name="city"/>
                    </div>
                    <div className="form-section">
                        <label>Country: </label>
                        <input type="text" name="country"/>
                    </div>
                    <div className="form-section">
                        <label>Description: </label>
                        <textarea type="text" name="description" placeholder="Type here..."></textarea>
                    </div>
                    <div className="form-section">
                        <label>Upload Image: </label>
                        <input type="file" name="image" accept=".jpeg, .jpg, .png" onChange={handleFileUpload}/>
                    </div>
                    <button type="submit" id="form-submit-btn">Submit</button>
                </form>
            </div>
        )} 
    </div>
    );
    }

export default MHome;