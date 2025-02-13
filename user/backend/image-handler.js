document.addEventListener('DOMContentLoaded', () => {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            const tempImage = new Image();
            tempImage.onload = () => {
              img.src = img.dataset.src;
              img.classList.remove('opacity-0');
              img.classList.add('opacity-100');
            };
            tempImage.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    const loadImage = (img) => {
      if ('loading' in HTMLImageElement.prototype) {
        img.loading = 'lazy';
      }
      
      img.classList.add('transition-opacity', 'duration-300', 'opacity-0');
      
      img.onerror = () => {
        const width = img.getAttribute('width') || img.clientWidth || 300;
        const height = img.getAttribute('height') || img.clientHeight || 200;
        img.src = `https://placehold.co/${width}x${height}/DEDEDE/555555?text=Image+Unavailable`;
        img.alt = 'Image unavailable';
        img.classList.remove('opacity-0');
        img.classList.add('opacity-100', 'error-image');
      };

      if (img.dataset.src) {
        imageObserver.observe(img);
      } else {
        img.classList.remove('opacity-0');
        img.classList.add('opacity-100');
      }
    };

    document.querySelectorAll('img[data-src], img:not([data-src])').forEach(loadImage);

    // Watch for dynamically added images
    new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === 1) {
            if (node.tagName === 'IMG') {
              loadImage(node);
            }
            node.querySelectorAll('img').forEach(loadImage);
          }
        });
      });
    }).observe(document.body, {
      childList: true,
      subtree: true
    });
  });
