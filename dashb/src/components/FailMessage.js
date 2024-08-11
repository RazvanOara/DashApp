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

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [onClose]);

  return (
    <div className="fail-message-overlay" onClick={onClose}>
      <div className="fail-message">
        <p>Rollup deployment failed. ID or subdomain is not unique. Please choose a different one.</p>
      </div>
    </div>
  );
}

export default FailMessage;
