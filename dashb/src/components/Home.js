// src/components/Home.js
import React, { useState } from 'react';
import Stacks from './Stacks';
import Networks from './Networks';
import Tokens from './Tokens'; // Import Tokens component
import './Home.css';

function Home() {
  const [showStacks, setShowStacks] = useState(true);
  const [showNetworks, setShowNetworks] = useState(false);
  const [showTokens, setShowTokens] = useState(false);


  

  function handleStacksTransition() {
    setShowStacks(false); // Trigger Stacks fade out
    setTimeout(() => setShowNetworks(true), 600); // Delay Networks slide-in
  }

  function handleNetworksTransition() {
    setShowNetworks(false); // Trigger Networks fade out
    setTimeout(() => setShowTokens(true), 600); // Delay Tokens slide-in
  }

  return (
    <div className="home-container">
      {showStacks && <Stacks onStackClick={handleStacksTransition} />}
      {showNetworks && <Networks onNetworkClick={handleNetworksTransition} />}
      {showTokens && <Tokens />}
    </div>
  );
}

export default Home;
