import React from 'react';
import './Stacks.css';

function Stacks({ onStackClick }) {
  const stacks = [
    { name: 'Optimism Bedrock', description: 'Description here', icon: '🌟' },
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
        {stacks.map((fstack, index) => (
          <div 
            key={index} 
            className="stack-item" 
            onClick={() => handleClick(fstack)}
          >
            <div className="stack-icon">{fstack.icon}</div>
            <div className="stack-details">
              <div className="stack-name">{fstack.name}</div>
              <div className="stack-description">{fstack.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stacks;
