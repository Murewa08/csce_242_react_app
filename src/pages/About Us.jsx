import "../css/About Us.css";

const AboutUs = () => {
    return (
        <body>
            <div id="slideshow">
                {/*<button id="previous" class="arrow" type="button">&lt;</button>
                <button id="next" class="arrow" type="button">&gt;</button>*/}
                <div id="slides">
                    <img src={"images/About Us header image.png"} alt="cliff"/>
                    <img src={"images/About Us Image 2.png"} alt="zip lining" class="hidden"/>
                    <img src={"images/About Us Image 3.png"} alt="restaurant" class="hidden" id="image-3"/>
                </div>
            </div>
            <main id="page-content">
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