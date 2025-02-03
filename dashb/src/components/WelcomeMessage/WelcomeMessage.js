import React, { useEffect, useState } from 'react';
import './WelcomeMessage.css';

function WelcomeMessage({ onClose, isVisible }) {
  const [isFading, setIsFading] = useState(false);
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setIsFading(false);
      setShouldRender(true);
    } else {
      setIsFading(true);
      // Ensure component unmounts after the fade-out transition
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300); // Adjust this duration to match your CSS transition duration

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!shouldRender) return null; // Prevent rendering if shouldRender is false

  return (
    <div
      className={`overlay ${isFading ? 'fade-out' : 'fade-in'}`}
      onClick={handleOverlayClick}
      data-testid="overlay"
    >
      <div
        className={`welcome-container ${isFading ? 'fade-out' : 'fade-in'}`}
        data-testid="welcome-container"
      >
        <h1>Welcome to Our Website!</h1>
        <p>We are glad to have you here. Click anywhere or close to dismiss this message.</p>
      </div>
    </div>
  );
}

export default WelcomeMessage;
