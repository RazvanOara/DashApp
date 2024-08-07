// src/components/Networks.js
import React, { useState, useEffect } from 'react';
import './Networks.css';

function Networks({ onNetworkClick }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // Trigger the slide-in animation
  }, []);

  const networks = [
    { name: 'Testnet', icon: '🧪' },
    { name: 'Mainnet', icon: '🌐' }
  ];

  function handleClick(network) {
    sessionStorage.setItem('networkChosen', network.name);
    if (onNetworkClick) {
      onNetworkClick(); // Notify Home component to handle transition
    }
  }

  return (
    <div className={`networks-container ${show ? 'slide-in' : ''}`}>
      <h2>Select a Network</h2>
      <div className="networks-grid">
        {networks.map((network, index) => (
          <div 
            key={index} 
            className="network-item" 
            onClick={() => handleClick(network)}
          >
            <div className="network-icon">{network.icon}</div>
            <div className="network-details">
              <div className="network-name">{network.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Networks;
