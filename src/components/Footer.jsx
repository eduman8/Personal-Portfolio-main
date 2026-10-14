const footerMeta = [
  {
    label: 'Argentina',
    icon: 'location',
  },
  {
    label: 'Open to remote opportunities',
    icon: 'globe',
  },
];

function FooterIcon({ name }) {
  const icons = {
    location: (
      <>
        <path d="M12 21s6-5.2 6-10a6 6 0 0 0-12 0c0 4.8 6 10 6 10Z" />
        <circle cx="12" cy="11" r="2" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M4 12h16" />
        <path d="M12 4c2 2.2 3 4.8 3 8s-1 5.8-3 8" />
        <path d="M12 4c-2 2.2-3 4.8-3 8s1 5.8 3 8" />
      </>
    ),
  };

  return (
    <span className="footer-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        {icons[name]}
      </svg>
    </span>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-content">
          <div className="footer-profile">
            <a className="footer-name" href="#top">
              Eduardo Gómez
            </a>
            <p>Junior Front-End / Full-Stack Developer</p>
          </div>

          <div className="footer-meta" aria-label="Location and availability">
            {footerMeta.map((item) => (
              <div className="footer-meta-item" key={item.label}>
                <FooterIcon name={item.icon} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Eduardo Gómez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
