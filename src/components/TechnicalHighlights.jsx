import { technicalHighlights } from '../data/portfolio.js';

function TechnicalHighlights() {
  return (
    <section id="technical-highlights" className="section technical-highlights-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Technical Highlights</p>
          <h2>Technical Highlights</h2>
          <p>
            Features and implementation details from the projects I have built.
          </p>
        </div>

        <ul className="technical-highlights-grid">
          {technicalHighlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TechnicalHighlights;
