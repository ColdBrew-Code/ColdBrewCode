import "./Contact.css"

function Contact() {
    return(
        <section id="contact" className="contact">
            <div className="contact-inner">
                <h2>Contact Us</h2>
                <div className="contact-rule" />
                <p>Ready to brew up something amazing together? Whether you have a project in mind or just want to chat about how we can help, we'd love to hear from you. Drop us a line and let's start the conversation!</p>
                <a href="mailto:contact@coldbrewcode.dev" className="btn btn--primary">Get in Touch</a>
            </div>
        </section>
    );
}

export default Contact;