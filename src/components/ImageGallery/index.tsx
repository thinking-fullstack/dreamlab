import { useRef, useEffect } from 'react';

const ImageGallery = ({ images }) => {
  const containerRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.src = entry.target.dataset.src;
          observer.unobserve(entry.target);
        }
      });
    }, options);
    
    if (!containerRef.current) return;

    const imagesToObserve = containerRef.current.querySelectorAll('img');
    
    imagesToObserve.forEach((image) => {
      observer.observe(image);
    });
    
    return () => {
      observer.disconnect();
    };
  }, [images]);
  
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 200px)', gap: '10px' }} ref={containerRef}>
      {images.map((image, index) => (
        <img
          key={index}
          src=""
          data-src={image}
          alt={`Image ${index + 1}`}
          width="200"
          height="200"
          style={{ objectFit: 'cover', width: 200, height: 200 }}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
