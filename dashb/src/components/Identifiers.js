import React, { useState, useEffect } from 'react';
import './Identifiers.css';
import DeploySuccess from './DeploySuccess';
import FailMessage from './FailMessage'; // Import FailMessage component
import { useHomeContext } from '../context/HomeContext'; // Import the context

function Identifiers({ onBack }) {
  const [rollupName, setRollupName] = useState('');
  const [subdomain, setSubdomain] = useState('');
  const [chainId, setChainId] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFail, setShowFail] = useState(false); // State for showing fail message

  // Access context to update state
  const { updateState } = useHomeContext();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSave = async () => {
    sessionStorage.setItem('rollupName', rollupName);
    sessionStorage.setItem('subdomain', subdomain);
    sessionStorage.setItem('chainId', chainId);

    // Retrieve all relevant data from sessionStorage
    const stackChosen = sessionStorage.getItem('stackChosen');
    const networkChosen = sessionStorage.getItem('networkChosen');
    const tokenChosen = sessionStorage.getItem('tokenChosen');
    const availabilityLayerChosen = sessionStorage.getItem('availabilityLayerChosen');
    const rollupNameStored = sessionStorage.getItem('rollupName');
    const subdomainStored = sessionStorage.getItem('subdomain');
    const chainIdStored = sessionStorage.getItem('chainId');

    // Create JSON object with all saved data
    const rollupData = {
      stackChosen,
      networkChosen,
      tokenChosen,
      availabilityLayerChosen,
      rollupName: rollupNameStored,
      subdomain: subdomainStored,
      chainId: chainIdStored,
    };

    console.log('Rollup Data JSON:', JSON.stringify(rollupData));

    // Send the JSON to the backend
    try {
      const response = await fetch('/api/deploy-rollup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rollupData),
      });

      if (response.ok) {
        // Show success message
        setShowSuccess(true);

        // Clear input fields
        setRollupName('');
        setSubdomain('');
        setChainId('');

        //clear the sesion storage
        sessionStorage.clear();

      } else {
        // Show failure message
        setShowFail(true);
        console.error('Failed to deploy rollup:', response.statusText);
      }
    } catch (error) {
      // Show failure message
      setShowFail(true);
      console.error('Error:', error);
    }
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

  const handleCloseFail = () => {
    setShowFail(false);
  };

  return (
    <div className={`identifiers-container ${isVisible ? 'slide-in' : ''}`}>
      {showSuccess && <DeploySuccess onClose={handleCloseSuccess} />}
      {showFail && <FailMessage onClose={handleCloseFail} />}
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
        <div className="description">Specify the uniquely subdomain within the rollup network to narrow down your focus.</div>
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
