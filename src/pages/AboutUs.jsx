import "../css/AboutUs.css";
import {useState} from "react";
import AboutUsHeaderImage from "../images/AboutUsHeaderImage.png";
import AboutUsHeader2 from "../images/AboutUsHeader2.png";
import AboutUsHeader3 from "../images/AboutUsHeader3.png";

const AboutUs = () => {
    const images = [AboutUsHeaderImage, AboutUsHeader2, AboutUsHeader3];

    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        setIndex((currentSlideIndex) => currentSlideIndex === 0 ? images.length-1 : currentSlideIndex - 1);
    };

    const nextSlide = () => {
        setIndex((currentSlideIndex) => currentSlideIndex === images.length - 1 ? 0 : currentSlideIndex + 1);
    };

    return (
        <body>
            <div id="slideshow">
                <button id="previous" className="arrow" type="button" onClick={prevSlide}>&lt;</button>
                <button id="next" className="arrow" type="button" onClick={nextSlide}>&gt;</button>
                <div id="slides">
                    <img src={images[index]} alt="slide"/>
                </div>
            </div>
            <main id="page-content-AboutUs">
                <div id="who-we-are-background">
                    <div class="card" id="who-we-are-card">
                        <h4>WHO WE ARE</h4>
                        <p>Meradiya is a travel planning platform designed to help users organize 
                            destinations, save prices, and plan trips with ease.</p>
                    </div>
                </div>
                <div id="our-mission-background">
                    <div class="card" id="mission-card">
                        <h4>OUR MISSION</h4>
                        <p>Our mission is to make travel planning simple and stress-free.
                            Meradiya helps travelers organize destinations, notes, and trip details in one place.</p>
                    </div>
                </div>
                <div id="our-vision-background">
                    <div class="card" id="vision-card">
                        <h4>OUR VISION</h4>
                        <p>Our vision is to inspire confident and organized travel for everyone.
                            We aim to turn trip planning into an enjoyable and seamless experience.</p>
                    </div>
                </div>
            </main>
        {/*<script src="slideshow.js"></script>*/}
        {/*<script src="script.js"></script>*/}
    </body>
    );
};

export default AboutUs;