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
    //const [showModal, setShowModal] = useState(false);
    const [showDestModal, setShowDestModal] = useState(false);
    const [destinations, setDestinations] = useState([]);
    const [selectedDestination, setSelectedDestination] = useState(null);
    const [showArrows, setShowArrows] = useState(false);
    const [addedDestination, setAddedDestination] = useState(false);
    const [showNewRow, setShowNewRow] = useState(false);
    //const [deletedDestination, setDeletedDestination] = useState(null);
    //const [deletedDestinations, setDeletedDestinations] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editingDestination, setEditingDestination] = useState(null);
    const [editFormData, setEditFormData] = useState({
        name: "",
        country: "",
        short_desc: "",
        image: null
    });

    useEffect(() => {fetch("https://csce-242-demo-backend.onrender.com/api/destinations").then((res) => res.json())
            .then((data) => setDestinations(data))
            .catch((err) => console.error(err));
                    }, []);

    const handleEditInputChange = (e) => {
        const {name, value} = e.target;
        setEditFormData({...editFormData, [name]: value});
    };

    const handleEditFileUpload = (e) => {
        const file = e.target.files[0];

        const validTypes = ["image/jpeg", "image/png"];

        if(!validTypes.includes(file.type))
        {
            alert("Invalid file type. Please upload a JPEG or PNG image.")
            return;
        }

        setEditFormData({...editFormData, image: file});
    };

    const handleEditFormSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("name", editFormData.name);
        data.append("country", editFormData.country);
        data.append("short_desc", editFormData.short_desc);

        if(editFormData.image)
        {
            data.append("image", editFormData.image);
        }

        try {
            const response = await fetch(`https://csce-242-demo-backend.onrender.com/api/destinations/${editingDestination._id}`,
                {
                    method: "PUT",
                    body: data
                }
            );

            const text = await response.text();
            if(!response.ok)
            {
                throw new Error(text);
            }

            const updatedDestination = JSON.parse(text);

            setDestinations((prev) => prev.map((dest) => dest._id === updatedDestination._id ? updatedDestination : dest));
            setShowEditModal(false);
            setEditingDestination(null);

            alert("Destination updated successfully!");
        }
        catch(error) {
            console.error("PUT error:", error);
            alert(error.message || "Could not update destination.");
        }
    };

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

    const getImageSrc = (imgName) => typeof imgName === "string" && imgName.startsWith("images/") ? `https://csce-242-demo-backend.onrender.com/${imgName}` : imgName;

    const handleDelete = async (e, id) => {
        e.stopPropagation();

        try 
        {
            const response = await fetch(`https://csce-242-demo-backend.onrender.com/api/destinations/${id}`,
                {
                    method: "DELETE",
                }
            );

            if(!response.ok)
            {
                const text = await response.text();
                throw new Error(text);
            }

            setDestinations((prev) => prev.filter((dest) => dest._id !== id));
            alert(`Destination deleted successfully!`);
        }
        catch(error) {
            console.error("DELETE error:", error);
            alert("Could not delete destination.");
        }
    };

    const renderDestinationCard = (dest) => (
        <div className="dest-info" key={dest._id} onClick={() => setSelectedDestination(dest)}>
            <img src={getImageSrc(dest.img_name)} alt={dest.name}/>

            <button className="edit-button" type="button" onClick={(e) => {
                e.stopPropagation()
                setEditingDestination(dest);
                setEditFormData({
                    name: dest.name,
                    country: dest.country,
                    short_desc: dest.short_desc,
                    image: null
                })
                setShowEditModal(true);
                }}>&#9999;
            </button>

            <button className="delete-button" type="button" onClick={(e) => handleDelete(e, dest._id)}>
                X
            </button>

            <p>{dest.name}, {dest.country}</p>
        </div>
    );
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const [formData, setFormData] = useState({
        name: "",
        country: "",
        short_desc: "",
        image: null
    });

    const handleFormSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("country", formData.country);
    data.append("short_desc", formData.short_desc);
    data.append("image", formData.image);

    try {
        const response = await fetch("https://csce-242-demo-backend.onrender.com/api/destinations", {
            method: "POST",
            body: data
        });

        const text = await response.text();
        console.log("STATUS:", response.status);
        console.log("RESPONSE:", text);

        if (!response.ok) {
            throw new Error(text);
        }

        const newDestination = JSON.parse(text);

        setDestinations([...destinations, newDestination]);
        setAddedDestination(newDestination);
        setShowArrows(true);
        setShowNewRow(false);
        setShowDestModal(false);

        alert("Destination added successfully!");
    } catch (error) {
        console.error("POST error:", error);
        alert(error.message || "Could not add destination.");
    }
};

    return (
    <div id="content">
        <main id="page-content-mhome">
            <img id="header-img" src={HeaderImage}/>
            {/*{showArrows && (<button id="previous" className="arrows" type="button" onClick={() => setShowNewRow((prev) => !prev)}>&lt;</button>)}*/}
            <button id="add-dest-btn" onClick={() => setShowDestModal(true)}>+ Add Destination</button>
            {/*{showArrows && (<button id="next" className="arrows" type="button" onClick={() => setShowNewRow((prev) => !prev)}>&gt;</button>)}*/}

            <div className="destinations-row">
                {destinations.slice(0, 3).map(renderDestinationCard)}
                {/*{!showNewRow ? (
                    <>
                        <div className="dest-info" onClick={() => setSelectedDestination({
                            name: "New York City",
                            country: "United States",
                            short_desc: "New York City is one of the most iconic cities in the world, known for its towering skyline, diverse culture, and nonstop energy. From the bright lights of Times Square to the peaceful paths of Central Park, the city offers something for everyone.",
                            img_name: NewYorkImage
                            })}>
                            <img src={NewYorkImage} alt="New York" />
                            <button className="edit-btn">&#9999;</button>
                            <p>New York, US</p>
                        </div>

                        <div className="dest-info" onClick={() => setSelectedDestination({
                            name: "Tokyo",
                            country: "Japan",
                            short_desc: "Tokyo is the capital and largest city of Japan, known for its blend of traditional culture and modern technology. From the bustling streets of Shibuya to the serene temples of Asakusa, the city offers a unique experience for every visitor.",
                            img_name: TokyoImage
                            })}>    
                            <img src={TokyoImage} alt="Tokyo" />
                            <p>Tokyo, Japan</p>
                        </div>

                        <div className="dest-info" onClick={() => setSelectedDestination({
                            name: "Bali",
                            country: "Indonesia",
                            short_desc: "Bali is an Indonesian island known for its tropical beaches, vibrant culture, and spiritual atmosphere. From the ancient temples of Uluwatu to the lush rice terraces of Jatiluwih, the island offers a unique blend of natural beauty and cultural richness.",
                            img_name: BaliImage
                            })}>
                            <img src={BaliImage} alt="Bali" />
                            <p>Bali, Indonesia</p>
                        </div>
                    </>
                ) : (<div className="dest-info" onClick={() => setSelectedDestination(addedDestination)}>
                        <img src={typeof addedDestination.img_name === "string" && addedDestination.img_name.startsWith("images/")
                            ? `https://csce-242-demo-backend.onrender.com/${addedDestination.img_name}`
                            : addedDestination.img_name} alt={addedDestination.name}/>
                        <p>{addedDestination.name}, {addedDestination.country}</p>
                    </div>)}*/}
            </div>
            <div className="destinations-row" id="row-2">
                {destinations.slice(3, 6).map(renderDestinationCard)}
                {/*<div className="dest-info" onClick={() => setSelectedDestination({
                    name: "England",
                    country: "UK",
                    short_desc: "England is a country in the United Kingdom, known for its rich history, beautiful countryside, and vibrant cities. From the historic castles of Warwickshire to the bustling streets of London, the country offers a unique experience for every visitor.",
                    img_name: EnglandImage})}>
                    <img src={EnglandImage}/>
                    <p>England, UK</p>
                </div>
                <div className="dest-info" onClick={() => setSelectedDestination({
                    name: "Bern",
                    country: "Switzerland",
                    short_desc: "Bern is the capital and a federal city of Switzerland, known for its well-preserved medieval old town and beautiful alpine surroundings. From the iconic Zytglogge clock tower to the serene lakeside setting, the city offers a unique experience for every visitor.",
                    img_name: SwitzerlandImage})}>
                    <img src={SwitzerlandImage}/>
                    <p>Bern, Switzerland</p>
                </div>
                <div className="dest-info" onClick={() => setSelectedDestination({
                    name: "Sydney",
                    country: "Australia",
                    short_desc: "Sydney is the largest city in Australia and a major global city. Known for its iconic Opera House, beautiful harbors, and vibrant cultural scene, the city offers a unique experience for every visitor.",
                    img_name: AustraliaImage})}>
                    <img src={AustraliaImage}/>
                    <p>Sydney, Australia</p>
                </div>*/}
            </div>

            {destinations.length > 6 && (
                <div className="destinations-row" id="row-3">
                    {destinations.slice(6).map(renderDestinationCard)}
                </div>
            )}
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
                <img src={typeof selectedDestination.img_name === "string" && selectedDestination.img_name.startsWith("images/")
                ? `https://csce-242-demo-backend.onrender.com/${selectedDestination.img_name}`
                : selectedDestination.img_name} alt={selectedDestination.name}/>
                <div id="modal-info">
                    <button id="modal-close-button" onClick={() => setSelectedDestination(null)}>X</button>
                    <h2>City: {selectedDestination.name}</h2>
                    <h2>Country: {selectedDestination.country}</h2>
                    <p>Description: {selectedDestination.short_desc}</p>
                </div>
            </div>
        </div>)}

        {showDestModal && (
            <div className="form-modal">
                <button id="form-close-button" onClick={() => setShowDestModal(false)}>X</button>
                <p>Add A Destination</p>
                <form onSubmit={handleFormSubmit}>
                    <div className="form-section">
                        <label>City: </label>
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange}/>
                    </div>
                    <div className="form-section">
                        <label>Country: </label>
                        <input type="text" name="country" value={formData.country} onChange={handleInputChange}/>
                    </div>
                    <div className="form-section">
                        <label>Description: </label>
                        <textarea name="short_desc" placeholder="Type here..." value={formData.short_desc} onChange={handleInputChange}></textarea>
                    </div>
                    <div className="form-section">
                        <label>Upload Image: </label>
                        <input type="file" name="image" accept=".jpeg, .jpg, .png" onChange={handleFileUpload}/>
                    </div>
                    <button type="submit" id="form-submit-btn">Submit</button>
                </form>
            </div>
        )}

        {showEditModal && editingDestination && (
            <div className="form-modal">
                <button id="form-close-button" onClick={() => {setShowEditModal(false)}}>X</button>
                <p>Edit Destination</p>

                <form onSubmit={handleEditFormSubmit}>
                    <div className="form-section">
                        <label>City: </label>
                        <input type="text" name="name" value={editFormData.name} onChange={handleEditInputChange}/>
                    </div>
                    <div className="form-section">
                        <label>Country: </label>
                        <input type="text" name="country" value={editFormData.country} onChange={handleEditInputChange}/>
                    </div>
                    <div className="form-section">
                        <label>Description: </label>
                        <textarea name="short_desc" placeholder="Type here..." value={editFormData.short_desc} onChange={handleEditInputChange}></textarea>
                    </div>
                    <div className="form-section">
                        <label>Upload New Image: </label>
                        <input type="file" name="image" accept=".jpeg, .jpg, .png" onChange={handleFileUpload}/>
                    </div>
                    <button type="submit" id="form-submit-btn">Save Changes</button>

                </form>
            </div>
        )} 
    </div>
    );
    }

export default MHome;