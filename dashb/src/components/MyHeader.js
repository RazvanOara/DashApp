
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MyHeader.css';

function MyHeader() {
  const navigate = useNavigate();

  return (
    <header className="my-header">
      <nav>
        <ul>
          <li><button className="nav-button" onClick={() => navigate('/')}>Home</button></li>
          <li><button className="nav-button" onClick={() => navigate('/about')}>About</button></li>
          <li><button className="nav-button" onClick={() => navigate('/contact')}>Contact</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default MyHeader;
