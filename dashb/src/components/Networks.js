
import React, { useState, useEffect } from 'react';
import './Networks.css';

function Networks({ onBack, onNetworkClick }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // Trigger the slide-in animation
  }, []);

  const networks = [
    { 
      name: 'Testnet', 
      icon: '🔨', 
      description: "Experiment with Optimism's features in a safe, non-production environment with simulated data."
    },
    { 
      name: 'Mainnet', 
      icon: '🖥️', 
      description: "Access the live Optimism network where real transactions occur and interact with actual data."
    }
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
              <div className="network-description">{network.description}</div>
            </div>
          </div>
        ))}
      </div>
      <button className="back-button" onClick={onBack}>
        <span>Back to Stacks</span>
      </button>
    </div>
  );
}

export default Networks;
