import "./About.css";
import aboutImg from "../../assets/about.jpg";
function About() {
    return(
        <section id="about" className="about">
            <div className="about-inner">
                <h2>About Us</h2>
                <div className="about-rule" />
                <div className="about-content">
                    <figure className="about-figure">
                        <div className="about-image-wrap">
                            <img src={aboutImg} alt="Team Photo at Pridefest" className="about-image"/>
                        </div>
                        <figcaption className="about-caption">Mina, Scarlett, Shanna, Laura, Geoffrey, and Nyx. Pridefest 2026.</figcaption>
                    </figure>
                    <div className="about-text">
                        <p>Our team has been working side by side at OTC for a couple of years — through late nights, tight deadlines, and more than a few cups of cold brew. This summer, we decided to make it official.</p>
                        <p>Cold Brew Code works with small businesses who want developers that actually invest in their vision. We're not a faceless agency — we're people who take every problem seriously and approach it with fresh eyes. We believe the best solutions come from thinking creatively, not just reaching for whatever worked last time.</p>
                        <p>If you want a team that treats your business like it matters, let's talk.</p>
                    </div>
                </div>
                <a href="#contact" className="about-contact-btn">Get in Touch</a>
            </div>
        </section>
    );
}

export default About;
