const aboutHighlights = [
  'Clean UI implementation',
  'REST API integration',
  'Full-stack project structure',
];

function About() {
  return (
    <section id="about" className="section section-muted">
      <div className="container section-grid">
        <div>
          <p className="section-label">About</p>
          <h2>Focused on practical, maintainable web solutions.</h2>
        </div>
        <div className="section-copy">
          <p>
            I am a Junior Front-End / Full-Stack Developer focused on building
            clean interfaces and connecting them with reliable back-end services.
          </p>
          <p>
            My current stack includes JavaScript, React, Redux, Node.js,
            Express, PostgreSQL, Microsoft SQL Server, HTML and CSS. I care about readable code,
            responsive layouts, clear user flows and features that solve real
            needs.
          </p>
          <ul className="about-highlights" aria-label="Development focus areas">
            {aboutHighlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
