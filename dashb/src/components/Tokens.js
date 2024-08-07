// src/components/Tokens.js
import React from 'react';
import './Tokens.css';

function Tokens() {
  const tokens = [
    { name: 'ETH', icon: '💎' },
    { name: 'USDC', icon: '🪙' },
    { name: 'WBT', icon: '🎟️' }
  ];

  function handleClick(token) {
    sessionStorage.setItem('tokenChosen', token.name);
    // Optional: Show an alert or perform any other action
    // alert(`Clicked on ${token.name}`);
  }

  return (
    <div className="tokens-container">
      <h2>Select a Token</h2>
      <div className="tokens-grid">
        {tokens.map((token, index) => (
          <div 
            key={index} 
            className="token-item" 
            onClick={() => handleClick(token)}
          >
            <div className="token-icon">{token.icon}</div>
            <div className="token-details">
              <div className="token-name">{token.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tokens;
