
import React, { useState, useEffect } from 'react';
import './Tokens.css';
import usdcImg from '../assets/usdc.png'
import wbtImg from '../assets/wbtc.256x256.png'
import ethImg from '../assets/ethereum-cryptocurrency.256x256.png'

function Tokens({ onBack, onTokenClick }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // Trigger the slide-in animation
  }, []);

  const tokens = [
    { name: 'Ethereum (ETH)', icon: ethImg },
    { name: 'USDC', icon: usdcImg },
    { name: 'Wrapped BTC (WBTC)', icon: wbtImg }
  ];

  function handleClick(token) {
    sessionStorage.setItem('tokenChosen', token.name);
    if (onTokenClick) {
      onTokenClick(); // Notify Home component to handle transition
    }
  }

  return (
    <div className={`tokens-container ${show ? 'slide-in' : ''}`}>
      <h2>Select a Token</h2>
      <div className="tokens-grid">
        {tokens.map((token, index) => (
          <div 
            key={index} 
            className="token-item" 
            onClick={() => handleClick(token)}
          >
            <div className="token-icon">
              {typeof token.icon === 'string' && token.icon.endsWith('.png') ? (
                <img src={token.icon} alt={token.name} className="token-image" />
              ) : (
                token.icon
              )}
            </div>
            <div className="token-details">
              <div className="token-name">{token.name}</div>
            </div>
          </div>
        ))}
      </div>
      <button className="back-button" onClick={onBack}>Back to Networks</button>
    </div>
  );
}

export default Tokens;
