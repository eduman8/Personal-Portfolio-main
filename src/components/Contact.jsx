import { contactLinks } from '../data/portfolio.js';

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-card">
        <p className="section-label">Contact</p>
        <h2>Let&apos;s talk about how I can contribute to your team.</h2>
        <p>
          I am open to junior front-end and full-stack opportunities where I can contribute to
          real products, keep improving, and build clean, functional web applications.
        </p>
        <div className="contact-links">
          <a href={contactLinks.email}>Email me</a>
          <a href={contactLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={contactLinks.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
