import React from "react";
import {useState} from "react";
import "../css/ContactForm.css";

const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState("");

    const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
  const formData = new FormData(form);
  formData.append("access_key", "a873e42a-e7cc-4fe6-8e7d-c6db872b0e77");

  setLoading(true);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      setResult("Success! Your message has been sent.");
      form.reset();
    } else {
      setResult("Error: " + data.message);
    }
  } catch (error) {
    setResult("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};

    return (
    <div>
        <div className="box" id="contact-form-box">
            <h1>Contact Form</h1>
            <p>Response time is from 1 to 2 business days</p>

            <form id="contact-form" onSubmit={handleSubmit}>

                <input type="hidden" name="access_key" value="a873e42a-e7cc-4fe6-8e7d-c6db872b0e77"/>

                <div className="form-group">
                     <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message"></textarea>

                    <div id="submission-result">
                        {result}
                    </div>
                </div>

                <p><button type="submit" id="submit-btn" disabled={loading}>{loading ? "Sending..." : "Submit Form"}</button></p>
            </form>
        </div>
    </div>
        
    );
};

export default ContactForm;