import "../css/Map.css";

const Map = () => {
    return(
        <div id="map">
            <p>123 Anywhere Street</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1654.0031017187341!2d-81.03231193103517!3d33.99237441950589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a4d455555555%3A0x50c181a3ce26e9a9!2sIBM%20Center%20For%20Innovation%20UofSC!5e0!3m2!1sen!2sus!4v1774358762954!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};

export default Map;