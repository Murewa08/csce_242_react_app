import "../css/Help.css";

const Help = () => {
    return (
    <body>
        <main>
            <div class="box" id="contact-form-box">
                <h1>Contact Form</h1>
                <p>Response time is from 1 to 2 business days</p>

                <form id="contact-form" action="https://api.web3forms.com/submit" method="POST">

                    <input type="hidden" name="access_key" value="a873e42a-e7cc-4fe6-8e7d-c6db872b0e77"/>

                    <div class="form-group">
                         <label>Name:</label>
                        <input type="text" name="user-name" id="user-name" required/>
                    </div>
                    <div class="form-group">
                        <label>Email:</label>
                        <input type="email" name="user-email" id="user-email" required/>
                    </div>
                    <div class="form-group">
                        <label>Message:</label>
                        <textarea name="message" id="message"></textarea>

                        <div id="submission-result">
                            
                        </div>
                    </div>

                    <p><button type="submit" id="submit-btn">Submit Form</button></p>
                </form>
            </div>
            <div class="box" id="google-map">
                <h1>Headquarters Location</h1>
                <p>573 Oakland Street</p>
                <iframe id="map" title="Map describing headquaters location" src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.0021038412383!2d-81.03373772523273!3d33.992479720885186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bad7ff85decd%3A0xeba1e7740d5c10e0!2sM.%20Bert%20Storey%20Engineering%20and%20Innovation%20Center!5e0!3m2!1sen!2sus!4v1772547121327!5m2!1sen!2sus"} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </main>
        {/*<script src="script.js"></script>*/}
    </body>
    );
};

export default Help;