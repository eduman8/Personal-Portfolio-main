import { skillGroups } from '../data/portfolio.js';

function Skills() {
  return (
    <section id="skills" className="section section-muted">
      <div className="container section-grid">
        <div>
          <p className="section-label">Skills</p>
          <h2>Technologies I use to build web applications.</h2>
        </div>
        <div className="skills-groups" aria-label="Technical skills by category">
          {skillGroups.map((group) => {
            const groupType = group.label === 'Tools' ? 'secondary' : 'primary';

            return (
              <div className={`skills-group skills-group--${groupType}`} key={group.label}>
                <h3>{group.label}</h3>
                <ul className="skills-list">
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
