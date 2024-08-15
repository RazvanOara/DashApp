import React, { useEffect } from 'react';
import './FailMessage.css';

function FailMessage({ onClose }) {
  useEffect(() => {
    // Set up click listener to close the message
    const handleClick = (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

    // Add click listener to the overlay
    const overlay = document.querySelector('.fail-message-overlay');
    overlay?.addEventListener('click', handleClick);

    return () => {
      overlay?.removeEventListener('click', handleClick);
    };
  }, [onClose]);

  return (
    <div className="fail-message-overlay" data-testid="fail-message-overlay">
      <div className="fail-message">
        <p>Rollup deployment failed. ID or subdomain is not unique. Please choose a different one.</p>
      </div>
    </div>
  );
}

export default FailMessage;
