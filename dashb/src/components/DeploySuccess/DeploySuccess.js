import React, { useEffect } from 'react';
import './DeploySuccess.css';

function DeploySuccess({ onClose }) {
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
    <div className="deploy-success-overlay" onClick={onClose}>
      <div className="deploy-success-message">
        <p>Rollup deployed successfully!</p>
      </div>
    </div>
  );
}

export default DeploySuccess;
