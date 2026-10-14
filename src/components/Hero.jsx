const heroHighlights = ['React', 'Node.js', 'PostgreSQL', 'REST APIs'];

function Hero() {
  return (
    <section id="top" className="hero section">
      <div className="container hero-content">
        <p className="eyebrow">Available for junior developer opportunities</p>
        <h1>Hi, I&apos;m Eduardo Gómez</h1>
        <h2>Junior Front-End / Full-Stack Developer</h2>
        <p className="hero-description">
          I build practical, responsive and maintainable web applications with
          React, Node.js and PostgreSQL.
        </p>
        <div className="hero-actions" aria-label="Portfolio actions">
          <a className="button button-primary" href="#projects">
            View Projects
          </a>
          <a className="button button-secondary" href="#contact">
            Contact Me
          </a>
        </div>
        <ul className="hero-highlights" aria-label="Core technologies">
          {heroHighlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Hero;
