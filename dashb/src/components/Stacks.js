// src/components/Stacks.js
import React from 'react';
import './Stacks.css';
import optiRockImg from '../assets/optiRock.png'; // Import your image

function Stacks({ onStackClick }) {
  const stacks = [
    { name: 'Optimism Bedrock', description: 'Description here', icon: optiRockImg },
    // other stacks...
  ];

  function handleClick(stack) {
    sessionStorage.setItem('stackChosen', stack.name);
    if (onStackClick) {
      onStackClick(); // Notify Home component to handle transition
    }
  }

  return (
    <div className="stacks-container">
      <h2>Select a stack</h2>
      <div className="stacks-grid">
        {stacks.map((stack, index) => (
          <div 
            key={index} 
            className="stack-item" 
            onClick={() => handleClick(stack)}
          >
            <div className="stack-icon">
              <img src={stack.icon} alt={stack.name} className="stack-image" />
            </div>
            <div className="stack-details">
              <div className="stack-name">{stack.name}</div>
              <div className="stack-description">{stack.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stacks;
