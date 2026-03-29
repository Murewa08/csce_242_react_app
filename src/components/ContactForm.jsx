import React from "react";
import "../css/ContactForm.css";

const ContactForm = () => {
    return (
    <main>
        <div className="box" id="contact-form-box">
            <h1>Contact Form</h1>
            <p>Response time is from 1 to 2 business days</p>

            <form id="contact-form" action="https://api.web3forms.com/submit" method="POST">

                <input type="hidden" name="access_key" value="a873e42a-e7cc-4fe6-8e7d-c6db872b0e77"/>

                <div className="form-group">
                     <label>Name:</label>
                    <input type="text" name="user-name" id="user-name" required/>
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="user-email" id="user-email" required/>
                </div>
                <div className="form-group">
                    <label>Message:</label>
                    <textarea name="message" id="message"></textarea>

                    <div id="submission-result">
                            
                    </div>
                </div>

                <p><button type="submit" id="submit-btn">Submit Form</button></p>
            </form>
        </div>
    </main>
        
    );
};

export default ContactForm;