import React from 'react';
import './Stacks.css';
import optiRockImg from '../assets/optiRock.png';

function Stacks({ onStackClick }) {
  const stacks = [
    { 
      name: 'Optimism Bedrock', 
      description: 'Learn more', 
      icon: optiRockImg,
      link: 'https://docs.optimism.io/stack/protocol/rollup/overview'
    },
  ];

  function handleClick(stack) {
    sessionStorage.setItem('stackChosen', stack.name);
    if (onStackClick) {
      onStackClick(); // Notify Home component to handle transition
    }
  }

  function handleLinkClick(e) {
    e.stopPropagation(); // Prevent click event from propagating to parent
    // Do not call e.preventDefault(), so the link opens as intended
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
              <div className="stack-description">
                <a 
                  href={stack.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={handleLinkClick} // Ensure this function is correctly applied
                >
                  {stack.description}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stacks;
