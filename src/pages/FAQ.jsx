import "../css/FAQ.css";
import FAQHeader5 from "../images/FAQHeader5.png";

const FAQ = () => {
    return (
        <body>
        <img id="header-img" src={FAQHeader5}/>
        <main id="page-content">
            <div id="questions-background">
                <p class="question">How do I create an account?</p>
                <p class="answer">You can create an account by clicking the Sign Up or 
                    Register button on the homepage. Fill in the required information 
                    and follow the on-screen instructions to get started.</p>
                <p class="question"> Is Meradiya free to use?</p>
                <p class="answer">Yes, Meradiya offers free access to its core features. 
                    Some advanced tools or premium services may require a subscription.</p>
                <p class="question">How can I reset my password?</p>
                <p class="answer">If you forget your password, click on “Forgot Password” 
                    on the login page. You'll receive an email with instructions to reset 
                    your password securely.</p>
                <p class="question">Can I access Meradiya on mobile devices?</p>
                <p class="answer">Yes! Meradiya is fully responsive and works on desktops, 
                    tablets, and mobile phones without needing to download an app.</p>
                <p class="question">How do I contact customer support?</p>
                <p class="answer">You can reach our support team through the Contact Us page. 
                    Simply fill out the form, and we'll respond as soon as possible.</p>
                <p class="question">Is my personal information secure?</p>
                <p class="answer">Absolutely. We use industry-standard security measures to protect your 
                    data and ensure your personal information remains safe and confidential.</p>
            </div>
        </main>
        {/*<script src="script.js"></script>*/}
    </body>
    );
};

export default FAQ;