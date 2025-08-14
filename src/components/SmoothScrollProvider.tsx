import { useEffect } from 'react';

const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Enhanced smooth scrolling for all devices
    const smoothScroll = (target: Element) => {
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = Math.min(Math.abs(distance) * 0.5, 1000); // Dynamic duration, max 1s
      let start: number | null = null;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const ease = easeInOutCubic(progress / duration);
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    };

    const easeInOutCubic = (t: number) => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    // Handle smooth scrolling for hash links
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          smoothScroll(target);
        }
      }
    };

    // Handle click events for smooth scrolling
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');
      
      if (link) {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href && href !== '#') {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            smoothScroll(targetElement);
            // Update URL without triggering scroll
            history.pushState(null, '', href);
          }
        }
      }
    };

    // Mobile-specific optimizations
    if (window.innerWidth <= 768) {
      (document.body.style as any).webkitOverflowScrolling = 'touch';
      (document.body.style as any).overscrollBehavior = 'none';
    }

    document.addEventListener('click', handleClick);
    window.addEventListener('hashchange', handleHashChange);
    
    // Initial check for hash
    handleHashChange();

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollProvider;