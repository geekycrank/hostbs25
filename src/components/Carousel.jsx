import React, { useState, useEffect } from 'react';
import Mobile from './Mobile.jsx';
import Desktop from './Desktop.jsx'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  return isMobile;
}

function EventCarousel() {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? <Mobile /> : <Desktop />}
    </>
  );
}

export default EventCarousel;