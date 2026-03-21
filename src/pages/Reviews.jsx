import "../css/Reviews.css";
import ReviewsHeader from "../images/ReviewsHeader.png";

const Reviews = () => {
    return (
        <body>
        <img id="header-img" src={ReviewsHeader}/>
        <main id="page-content-reviews">
            <div id="reviews-row-1">
                <div class="review">
                    <div class="stars-row">
                        <span class="stars">&#9733;</span>
                        <span class="stars">&#9733;</span>
                        <span class="stars">&#9733;</span>
                        <span class="stars">&#9733;</span>
                        <span class="stars">&#9733;</span>
                    </div>
                    <p class="comment">Meradiya made everything so simple and easy to navigate. 
                        The design is clean, and I was able to find what I needed 
                        without any confusion. Highly recommended!</p>
                    <p class="customer">-- A. Martinez</p>
                </div>
                <div class="review">
                    <div class="stars-row">
                        <span class="stars">&#9733;</span>
                        <span class="stars">&#9733;</span>
                        <span class="stars">&#9733;</span>
                        <span class="stars">&#9733;</span>
                        <span class="stars">&#9733;</span>
                    </div>
                    <p class="comment">I really appreciate how user-friendly the platform is. 
                        Everything loads quickly, and the layout feels modern and intuitive.</p>
                    <p class="customer">-- J. Smith</p>
                </div>
                <div class="review">
                    <div class="stars-row">
                        <span class="stars">&#9733;</span>
                        <span class="stars">&#9733;</span>
                        <span class="stars">&#9733;</span>
                        <span class="stars">&#9733;</span>
                        <span class="stars">&#9733;</span>
                    </div>
                    <p class="comment">This is a beautiful and inspiring travel website. 
                        The photos are stunning, and everything is easy to navigate, making me 
                        want to start planning my next trip!</p>
                    <p class="customer">-- R. Patel</p>
                </div>
            </div>
            <div id="reviews-row-2">
                <div class="review">
                    <div class="stars-row">
                        <span class="stars">&#9733;</span>
                        <span class="stars">&#9733;</span>
                        <span class="stars">&#9733;</span>
                        <span class="stars">&#9733;</span>
                        <span class="stars">&#9733;</span>
                    </div>
                    <p class="comment">Overall, Meradiya offers a great experience. The features are 
                        well-organized, and the site works smoothly on both desktop and mobile.</p>
                    <p class="customer">-- K. Hassan</p>
                </div>
                <div class="review">
                    <div class="stars-row">
                        <span class="stars">&#9733;</span>
                        <span class="stars">&#9733;</span>
                        <span class="stars">&#9733;</span>
                        <span class="stars">&#9733;</span>
                        <span class="stars">&#9733;</span>
                    </div>
                    <p class="comment">The soft color palette and simple layout make this platform enjoyable 
                        to use. It feels professional and trustworthy.</p>
                    <p class="customer">-- L. Chen</p>
                </div>
                <div class="review">
                    <div class="stars-row">
                        <span class="stars">&#9733;</span>
                        <span class="stars">&#9733;</span>
                        <span class="stars">&#9733;</span>
                        <span class="stars">&#9733;</span>
                        <span class="stars">&#9733;</span>
                    </div>
                    <p class="comment">Meradiya exceeded my expectations. Everything from navigation to 
                        performance feels polished and well thought out.</p>
                    <p class="customer">-- S. Johnson</p>
                </div>
            </div>  
        </main>
        {/*<script src="script.js"></script>*/}
    </body>
    );
};

export default Reviews;