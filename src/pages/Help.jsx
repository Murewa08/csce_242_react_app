import "../css/Help.css";
import Map from "../components/Map";
import ContactForm from "../components/ContactForm";

const Help = () => {
    return (
    <body>
        <main>
            <div className="box" id="contact-form-box">
                <ContactForm/>
            </div>
            <div className="box" id="google-map">
                <Map/>
            </div>
        </main>
        <script src="Help.js"></script>
    </body>
    );
};

export default Help;