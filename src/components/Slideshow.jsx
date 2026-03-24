import "../css/Slideshow.css";
import {useState} from "react";
const Slideshow = () => {
    const[slideIndex, setSlideIndex] = useState(0);

    const slideForward = () => {
        /*if(slideIndex == images.length-1) {
            slideIndex(0);
        }else {
            setSlideIndex(slideIndex+1);
        }*/

        setSlideIndex(slideIndex == images.length-1?0:slideIndex+1);
    };

    const slideBackward = () => {
        /*if(slideIndex == images.length-1) {
            slideIndex(0);
        }else {
            setSlideIndex(slideIndex+1);
        }*/

        setSlideIndex(slideIndex == images.length-1?images.length-1:slideIndex-1);
    };
    return(
        <section className="slideshow">
            <img src={images[slideIndex]}/>
            <a id="next-arrow" onClick={slideForward} className="arrow" href="#">&rsaquo;</a>
            <a id="prev-arrow" onClick={slideBackward} className="arrow" href="#">&lsaquo;</a>
        </section>
    );
};

export default Slideshow;