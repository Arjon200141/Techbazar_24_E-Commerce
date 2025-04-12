// Recaptcha.jsx
import React, { useEffect, useRef } from 'react';

const Recaptcha = ({ siteKey }) => {
  const recaptchaRef = useRef(null);

  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      script.async = true;
      document.body.appendChild(script);
    };

    loadScript();
  }, [siteKey]);

  return <div ref={recaptchaRef}></div>;
};

export default Recaptcha; // Must include this line