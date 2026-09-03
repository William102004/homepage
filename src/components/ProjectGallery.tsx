import React, { useCallback, useEffect, useState } from 'react';
import '../css/ProjectGallery.css';

export interface GalleryImage {
  src: string;
  alt: string;
}

interface ProjectGalleryProps {
  images: GalleryImage[];
}

function ProjectGallery({ images }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? current : (current - 1 + images.length) % images.length
    );
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current === null ? current : (current + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') showPrev();
      if (event.key === 'ArrowRight') showNext();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, close, showPrev, showNext]);

  if (images.length === 0) {
    return (
      <div className="Project-thumbnail" aria-hidden="true">
        <span>Screenshot coming soon</span>
      </div>
    );
  }

  return (
    <>
      <div className="Project-thumbnail Project-thumbnail-image">
        <button
          type="button"
          className="Project-thumbnail-button"
          onClick={() => setActiveIndex(0)}
          aria-label={`View screenshots for ${images[0].alt}`}
        >
          <img src={images[0].src} alt={images[0].alt} loading="lazy" />
          {images.length > 1 && (
            <span className="Project-thumbnail-count">+{images.length - 1} more</span>
          )}
        </button>
      </div>

      {isOpen && (
        <div
          className="Gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={images[activeIndex as number].alt}
          onClick={close}
        >
          <button
            type="button"
            className="Gallery-close"
            onClick={close}
            aria-label="Close gallery"
          >
            &times;
          </button>

          {images.length > 1 && (
            <button
              type="button"
              className="Gallery-nav Gallery-nav-prev"
              onClick={(event) => {
                event.stopPropagation();
                showPrev();
              }}
              aria-label="Previous screenshot"
            >
              &#8249;
            </button>
          )}

          <img
            className="Gallery-image"
            src={images[activeIndex as number].src}
            alt={images[activeIndex as number].alt}
            onClick={(event) => event.stopPropagation()}
          />

          {images.length > 1 && (
            <button
              type="button"
              className="Gallery-nav Gallery-nav-next"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next screenshot"
            >
              &#8250;
            </button>
          )}

          <div className="Gallery-caption" onClick={(event) => event.stopPropagation()}>
            <span>{images[activeIndex as number].alt}</span>
            {images.length > 1 && (
              <span className="Gallery-counter">
                {(activeIndex as number) + 1} / {images.length}
              </span>
            )}
          </div>

          {images.length > 1 && (
            <div className="Gallery-thumbstrip" onClick={(event) => event.stopPropagation()}>
              {images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  className={
                    index === activeIndex
                      ? 'Gallery-thumb Gallery-thumb-active'
                      : 'Gallery-thumb'
                  }
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show screenshot ${index + 1}: ${image.alt}`}
                >
                  <img src={image.src} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default ProjectGallery;
