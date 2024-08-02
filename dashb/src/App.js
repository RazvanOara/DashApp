// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MyHeader from './components/MyHeader';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  const [isMessageVisible, setIsMessageVisible] = useState(true);

  const handleClose = () => {
    setIsMessageVisible(false);
  };

  return (
    <Router>
      <div className="App">
        <MyHeader />
        {isMessageVisible && (
          <WelcomeMessage 
            onClose={handleClose} 
            isVisible={isMessageVisible} 
          />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
