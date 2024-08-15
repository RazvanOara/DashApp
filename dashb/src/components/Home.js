// src/components/Home.js
import React from 'react';
import { useHomeContext } from '../context/HomeContext';
import Stacks from './Stacks';
import Networks from './Networks';
import Tokens from './Tokens';
import AvailabilityLayer from './AvailabilityLayer';
import Identifiers from './Identifiers';
import './Home.css';

function Home() {
  const { state, updateState } = useHomeContext();

  const handleStacksTransition = () => {
    updateState({ showStacks: false });
    setTimeout(() => updateState({ showNetworks: true }), 600);
  };

  const handleNetworksTransition = () => {
    updateState({ showNetworks: false });
    setTimeout(() => updateState({ showTokens: true }), 600);
  };

  const handleTokensTransition = () => {
    updateState({ showTokens: false });
    setTimeout(() => updateState({ showAvailabilityLayer: true }), 600);
  };

  const handleAvailabilityLayerTransition = () => {
    updateState({ showAvailabilityLayer: false });
    setTimeout(() => updateState({ showIdentifiers: true }), 600);
  };

  const handleBackToStacks = () => {
    sessionStorage.removeItem('networkChosen');
    updateState({ showNetworks: false });
    setTimeout(() => updateState({ showStacks: true }), 600);
  };

  const handleBackToNetworks = () => {
    sessionStorage.removeItem('tokenChosen');
    updateState({ showTokens: false });
    setTimeout(() => updateState({ showNetworks: true }), 600);
  };

  const handleBackToTokens = () => {
    sessionStorage.removeItem('availabilityLayerChosen');
    updateState({ showAvailabilityLayer: false });
    setTimeout(() => updateState({ showTokens: true }), 600);
  };

  const handleBackToAvailabilityLayer = () => {
    sessionStorage.removeItem('rollupName');
    sessionStorage.removeItem('subdomain');
    sessionStorage.removeItem('chainId');
    updateState({ showIdentifiers: false });
    setTimeout(() => updateState({ showAvailabilityLayer: true }), 600);
  };

  return (
    <div className="home-container">
      {state.showStacks && <Stacks onStackClick={handleStacksTransition} />}
      {state.showNetworks && <Networks onBack={handleBackToStacks} onNetworkClick={handleNetworksTransition} />}
      {state.showTokens && <Tokens onBack={handleBackToNetworks} onTokenClick={handleTokensTransition} />}
      {state.showAvailabilityLayer && <AvailabilityLayer onBack={handleBackToTokens} onAvailabilityLayerClick={handleAvailabilityLayerTransition} />}
      {state.showIdentifiers && <Identifiers onBack={handleBackToAvailabilityLayer} />}
    </div>
  );
}

export default Home;
