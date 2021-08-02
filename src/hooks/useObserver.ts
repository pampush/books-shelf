import React from 'react';

const useObserver = (handler: () => void) => {
  const divRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!divRef) return;
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8,
    };

    const callback: IntersectionObserverCallback = function (entry) {
      if (entry[0].isIntersecting) {
        handler();
      }
    };

    const observer = new IntersectionObserver(callback, options);

    observer.observe(divRef.current as HTMLDivElement);

    return () => {
      console.log('unobserve');
      observer.unobserve(divRef.current as HTMLDivElement);
    };
  }, []);

  return { divRef };
};

export { useObserver };
