import "../css/Help.css";
import Map from "../components/Map";
import ContactForm from "../components/ContactForm";

const Help = () => {
    return (
    <main>
        {/*<div className="box" id="contact-form-box">*/}
            <ContactForm/>
        {/*</div>
        <div className="box" id="google-map">*/}
            <Map/>
        {/*</div>*/}
        <script src="Help.js"></script>
    </main>
    );
};

export default Help;