import React, { useEffect, useState } from 'react';
import './WelcomeMessage.css';

function WelcomeMessage({ onClose, isVisible }) {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsFading(false);
    } else {
      // Trigger fade-out
      setIsFading(true);
    }
  }, [isVisible]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isVisible && (
        <div
          className={`overlay ${isFading ? 'fade-out' : ''}`}
          onClick={handleOverlayClick}
        >
          <div
            className={`welcome-container ${isFading ? 'fade-out' : 'fade-in'}`}
          >
            {/* <button className="close-button" onClick={onClose}>×</button> */}
            <h1>Welcome to Our Website!</h1>
            <p>We are glad to have you here. Click anywhere or close to dismiss this message.</p>
          </div>
        </div>
      )}
    </>
  );
}

export default WelcomeMessage;