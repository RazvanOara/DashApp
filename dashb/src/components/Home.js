import React, { useState } from 'react';
import Stacks from './Stacks';
import Networks from './Networks';
import Tokens from './Tokens';
import AvailabilityLayer from './AvailabilityLayer';
import Identifiers from './Identifiers';
import './Home.css';

function Home() {
  const [showStacks, setShowStacks] = useState(true);
  const [showNetworks, setShowNetworks] = useState(false);
  const [showTokens, setShowTokens] = useState(false);
  const [showAvailabilityLayer, setShowAvailabilityLayer] = useState(false);
  const [showIdentifiers, setShowIdentifiers] = useState(false);

  function handleStacksTransition() {
    setShowStacks(false);
    setTimeout(() => setShowNetworks(true), 600);
  }

  function handleNetworksTransition() {
    setShowNetworks(false);
    setTimeout(() => setShowTokens(true), 600);
  }

  function handleTokensTransition() {
    setShowTokens(false);
    setTimeout(() => setShowAvailabilityLayer(true), 600);
  }

  function handleAvailabilityLayerTransition() {
    setShowAvailabilityLayer(false);
    setTimeout(() => setShowIdentifiers(true), 600);
  }

  function handleBackToStacks() {
    sessionStorage.removeItem('networkChosen');
    setShowNetworks(false);
    setTimeout(() => setShowStacks(true), 600);
  }

  function handleBackToNetworks() {
    sessionStorage.removeItem('tokenChosen');
    setShowTokens(false);
    setTimeout(() => setShowNetworks(true), 600);
  }

  function handleBackToTokens() {
    sessionStorage.removeItem('availabilityLayerChosen');
    setShowAvailabilityLayer(false);
    setTimeout(() => setShowTokens(true), 600);
  }

  function handleBackToAvailabilityLayer() {
    sessionStorage.removeItem('rollupName');
    sessionStorage.removeItem('subdomain');
    sessionStorage.removeItem('chainId');
    setShowIdentifiers(false);
    setTimeout(() => setShowAvailabilityLayer(true), 600);
  }

  return (
    <div className="home-container">
      {showStacks && <Stacks onStackClick={handleStacksTransition} />}
      {showNetworks && <Networks onBack={handleBackToStacks} onNetworkClick={handleNetworksTransition} />}
      {showTokens && <Tokens onBack={handleBackToNetworks} onTokenClick={handleTokensTransition} />}
      {showAvailabilityLayer && <AvailabilityLayer onBack={handleBackToTokens} onAvailabilityLayerClick={handleAvailabilityLayerTransition} />}
      {showIdentifiers && <Identifiers onBack={handleBackToAvailabilityLayer} />}
    </div>
  );
}

export default Home;
