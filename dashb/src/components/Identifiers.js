
import React, { useState, useEffect } from 'react';
import './Identifiers.css';
import DeploySuccess from './DeploySuccess';
import { useHomeContext } from '../context/HomeContext'; // Import the context

function Identifiers({ onBack }) {
  const [rollupName, setRollupName] = useState('');
  const [subdomain, setSubdomain] = useState('');
  const [chainId, setChainId] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Access context to update state
  const { updateState } = useHomeContext();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSave = () => {
    sessionStorage.setItem('rollupName', rollupName);
    sessionStorage.setItem('subdomain', subdomain);
    sessionStorage.setItem('chainId', chainId);

    // Show success message
    setShowSuccess(true);

    // Clear input fields
    setRollupName('');
    setSubdomain('');
    setChainId('');
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    
    // Reset Home component state to show initial state
    updateState({
      showStacks: true,
      showNetworks: false,
      showTokens: false,
      showAvailabilityLayer: false,
      showIdentifiers: false,
    });
  };

  return (
    <div className={`identifiers-container ${isVisible ? 'slide-in' : ''}`}>
      {showSuccess && <DeploySuccess onClose={handleCloseSuccess} />}
      <h2>Enter Identifiers</h2>
      <div className="form-group">
        <label>Rollup Name</label>
        <input 
          type="text" 
          value={rollupName} 
          onChange={(e) => setRollupName(e.target.value)} 
        />
        <div className="description">Identify the rollup layer you're using by its unique name.</div>
      </div>
      <div className="form-group">
        <label>Subdomain</label>
        <input 
          type="text" 
          value={subdomain} 
          onChange={(e) => setSubdomain(e.target.value)} 
        />
        <div className="description">Specify the subdomain within the rollup network to narrow down your focus.</div>
      </div>
      <div className="form-group">
        <label>Chain ID</label>
        <input 
          type="text" 
          value={chainId} 
          onChange={(e) => setChainId(e.target.value)} 
        />
        <div className="description">Enter the Chain ID to uniquely identify and connect to your blockchain or rollup.</div>
      </div>
      <div className="button-group">
        <button className="back-button" onClick={onBack}>Back to Availability Layer</button>
        <button className="save-button" onClick={handleSave}>Deploy new rollup</button>
      </div>
    </div>
  );
}

export default Identifiers;
