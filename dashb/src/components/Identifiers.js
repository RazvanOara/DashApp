// src/components/Identifiers.js
import React, { useState } from 'react';
import './Identifiers.css';

function Identifiers({ onBack }) {
  const [rollupName, setRollupName] = useState('');
  const [subdomain, setSubdomain] = useState('');
  const [chainId, setChainId] = useState('');

  const handleSave = () => {
    sessionStorage.setItem('rollupName', rollupName);
    sessionStorage.setItem('subdomain', subdomain);
    sessionStorage.setItem('chainId', chainId);
    // Add any additional logic for handling the next steps
    
    // Log data to the console
    console.log('Stack Chosen:', sessionStorage.getItem('stackChosen'));
    console.log('Network Chosen:',sessionStorage.getItem('networkChosen'));
    console.log('Token Chosen:', sessionStorage.getItem('tokenChosen'));
    console.log('Rollup Name:', sessionStorage.getItem('rollupName'));
    console.log('Subdomain:', sessionStorage.getItem('subdomain'));
    console.log('Chain ID:', sessionStorage.getItem('chainId'));
    console.log('Layer:', sessionStorage.getItem('availabilityLayerChosen'));
    
  };

  return (
    <div className="identifiers-container">
      <h2>Enter Identifiers</h2>
      <div className="form-group">
        <label>Rollup Name</label>
        <input 
          type="text" 
          value={rollupName} 
          onChange={(e) => setRollupName(e.target.value)} 
        />
      </div>
      <div className="form-group">
        <label>Subdomain</label>
        <input 
          type="text" 
          value={subdomain} 
          onChange={(e) => setSubdomain(e.target.value)} 
        />
      </div>
      <div className="form-group">
        <label>Chain ID</label>
        <input 
          type="text" 
          value={chainId} 
          onChange={(e) => setChainId(e.target.value)} 
        />
      </div>
      <div className="button-group">
        <button className="back-button" onClick={onBack}>Back to Availability Layer</button>
        <button className="save-button" onClick={handleSave}>Deploy new rollup</button>
      </div>
    </div>
  );
}

export default Identifiers;
