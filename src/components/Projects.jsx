import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { projects } from '../data/portfolio.js';

function getProjectImages(project) {
  const images = Array.isArray(project.images) && project.images.length > 0
    ? project.images
    : project.image
      ? [project.image]
      : [];

  return images.map((image, index) =>
    typeof image === 'string'
      ? { src: image, alt: `${project.title} project screenshot ${index + 1}` }
      : image,
  );
}

function ProjectGallery({ project }) {
  const images = getProjectImages(project);
  const hasImages = images.length > 0;
  const hasMultipleImages = images.length > 1;
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const showPreviousImage = () => {
    if (!hasImages) return;
    setActiveImageIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1,
    );
  };

  const showNextImage = () => {
    if (!hasImages) return;
    setActiveImageIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1,
    );
  };

  const openLightbox = () => {
    if (hasImages) {
      setIsLightboxOpen(true);
    }
  };

  const closeLightbox = () => setIsLightboxOpen(false);

  useEffect(() => {
    if (!isLightboxOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }

      if (event.key === 'ArrowLeft') {
        showPreviousImage();
      }

      if (event.key === 'ArrowRight') {
        showNextImage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('lightbox-open');

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('lightbox-open');
    };
  }, [isLightboxOpen, images.length]);

  return (
    <>
      <div className={`project-media${hasImages ? ' project-media--interactive' : ''}`}>
        {hasImages ? (
          <button
            className="project-image-button"
            type="button"
            onClick={openLightbox}
            aria-label={`Open ${project.title} image ${activeImageIndex + 1} of ${images.length}`}
          >
            <img
              className={`project-image project-image--${project.imageFit ?? 'contain'}`}
              src={images[activeImageIndex].src}
              alt={images[activeImageIndex].alt}
              style={{ objectPosition: project.imagePosition }}
            />
          </button>
        ) : (
          <div className="project-image-placeholder" role="img" aria-label={`${project.title} preview placeholder`}>
            <span>No preview image yet</span>
          </div>
        )}
        <div className="project-media-overlay" aria-hidden="true" />
        {project.status ? <span className="project-status-badge">{project.status}</span> : null}
        {hasMultipleImages ? (
          <div className="project-gallery-controls" aria-label={`${project.title} image gallery controls`}>
            <button type="button" onClick={showPreviousImage} aria-label="Previous project image">
              ‹
            </button>
            <span>
              {activeImageIndex + 1}/{images.length}
            </span>
            <button type="button" onClick={showNextImage} aria-label="Next project image">
              ›
            </button>
          </div>
        ) : null}
        {project.overlayLabel ? (
          <div className="project-coming-soon">
            <span>{project.overlayLabel}</span>
          </div>
        ) : null}
      </div>

      {isLightboxOpen
        ? createPortal(
            <div className="project-lightbox" role="dialog" aria-modal="true" aria-label={`${project.title} image gallery`} onClick={closeLightbox}>
              <button className="project-lightbox-close" type="button" onClick={closeLightbox} aria-label="Close image gallery">
                ×
              </button>
              <div className="project-lightbox-content" onClick={(event) => event.stopPropagation()}>
                {hasMultipleImages ? (
                  <button className="project-lightbox-nav project-lightbox-nav--previous" type="button" onClick={showPreviousImage} aria-label="Previous project image">
                    ‹
                  </button>
                ) : null}
                <img src={images[activeImageIndex].src} alt={images[activeImageIndex].alt} />
                {hasMultipleImages ? (
                  <button className="project-lightbox-nav project-lightbox-nav--next" type="button" onClick={showNextImage} aria-label="Next project image">
                    ›
                  </button>
                ) : null}
              </div>
              {hasMultipleImages ? (
                <div className="project-lightbox-counter">
                  {activeImageIndex + 1}/{images.length}
                </div>
              ) : null}
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

function ProjectCard({ project }) {
  const projectLinks = [
    project.demoUrl
      ? {
          href: project.demoUrl,
          label: project.demoLabel ?? 'Live Demo',
        }
      : null,
    project.githubUrl
      ? {
          href: project.githubUrl,
          label: 'GitHub',
        }
      : null,
  ].filter(Boolean);

  return (
    <article className="project-card">
      <ProjectGallery project={project} />
      <div className="project-content">
        <div className="project-copy">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        {project.features ? (
          <ul className="project-feature-list" aria-label={`${project.title} key features`}>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        ) : null}
        <ul className="tag-list" aria-label={`${project.title} technologies`}>
          {project.stack.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        {projectLinks.length > 0 || project.disabledActionLabel ? (
          <div className="project-links">
            {projectLinks.map((link) => (
              <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>
                {link.label}
              </a>
            ))}
            {project.disabledActionLabel ? (
              <span className="project-link-disabled" aria-disabled="true">
                {project.disabledActionLabel}
              </span>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Projects</p>
          <h2>Selected work</h2>
          <p>
            Selected projects that show my experience building real interfaces,
            full-stack flows, API integrations and production deployments for real
            business use cases.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
