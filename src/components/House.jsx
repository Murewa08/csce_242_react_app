import "../css/House.css";
import housePic from "../images/housePic.jpeg";
import NewYorkImage from "../images/NewYorkImage.png";

const House = (props) => {
    return (
        <section className="house">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <img src={"http://localhost:3001/images/NewYorkImage.png"}/>
        </section>
    );
}

export default House;