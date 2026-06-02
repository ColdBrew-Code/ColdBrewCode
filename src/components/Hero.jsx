import "./Hero.css";

function Hero() {
    return(
        <section className="hero">
            <h1 className="hero-title">Welcome to Cold Brew Code!</h1>
            <p classname="hero-tagline">Freelance software development, brewed fresh.</p>
            <a href="#about" className="hero-cta">Learn More</a>
        </section>
    );
}

export default Hero;