// src/components/AvailabilityLayer.js
import React, { useState, useEffect } from 'react';
import './AvailabilityLayer.css';
import ethImg from '../assets/ethereum-cryptocurrency.256x256.png';
import celestiaImg from '../assets/celestia-tia-logo.png';

function AvailabilityLayer({ onBack, onAvailabilityLayerClick }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // Trigger the slide-in animation
  }, []);

  const availabilityLayers = [
    { name: 'Ethereum', icon: ethImg },
    { name: 'Celestia', icon: celestiaImg }
  ];

  function handleClick(layer) {
    sessionStorage.setItem('availabilityLayerChosen', layer.name);
    if (onAvailabilityLayerClick) {
      onAvailabilityLayerClick(); // Notify Home component to handle transition
    }
  }

  return (
    <div className={`availability-layer-container ${show ? 'slide-in' : ''}`}>
      <h2>Select an Availability Layer</h2>
      <div className="availability-layer-grid">
        {availabilityLayers.map((layer, index) => (
          <div 
            key={index} 
            className="availability-layer-item" 
            onClick={() => handleClick(layer)}
          >
            <div className="availability-layer-icon">
              <img src={layer.icon} alt={layer.name} />
            </div>
            <div className="availability-layer-details">
              <div className="availability-layer-name">{layer.name}</div>
            </div>
          </div>
        ))}
      </div>
      <button className="back-button" onClick={onBack}>Back to Tokens</button>
    </div>
  );
}

export default AvailabilityLayer;