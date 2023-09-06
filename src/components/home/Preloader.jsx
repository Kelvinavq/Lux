import React, { useState, useEffect } from 'react';
import lux_logo from '../../assets/lux_logo.png';
import '../../styles/preloader.css';

/**
 * The Preloader component displays a loading animation with a Lux logo and a spinner.
 * It fades out after a specified timeout.
 */
export const Preloader = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Set a timeout to fade out the preloader after 2000 milliseconds (2 seconds)
    const preloaderTimeout = setTimeout(() => {
      setShowPreloader(false);
    }, 2000);

    // Clear the timeout when the component unmounts to prevent memory leaks
    return () => clearTimeout(preloaderTimeout);
  }, []);

  return (
    <div className={`container-preloader ${showPreloader ? '' : 'fade-out'}`}>
      <div className={`preloader ${showPreloader ? '' : 'fade-out'}`}>
        <img src={lux_logo} alt="" className={` ${showPreloader ? '' : 'fade-out'}`} />
        <div className={`spinner ${showPreloader ? '' : 'fade-out'}`}>
          <div className={`spinner1 ${showPreloader ? '' : 'fade-out'}`}></div>
        </div>
      </div>
    </div>
  );
};
