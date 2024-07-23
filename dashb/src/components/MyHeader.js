
import React from 'react';
import './MyHeader.css'; 

function MyHeader() {
  return (
    <header className="my-header">
      <nav>
        <ul>
        <li><button className="nav-button" onClick={() => handleButtonClick('rollups')}>Rollups</button></li>
        <li><button className="nav-button" onClick={() => handleButtonClick('billing')}>Billing</button></li>
        <li><button className="nav-button" onClick={() => handleButtonClick('organsiation')}>Organisation</button></li>
        </ul>
      </nav>
    </header>
  );


  function handleButtonClick(page) {
    alert(`Navigating to ${page}`);
    // Add your navigation logic here, such as using React Router
  }

}

export default MyHeader;
