
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MyHeader from './components/MyHeader/MyHeader'
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';
import { HomeProvider } from './context/HomeContext';


function App() {
  const [isMessageVisible, setIsMessageVisible] = useState(true);
  const [isHomeVisible, setIsHomeVisible] = useState(false);

  const handleCloseMessage = () => {
    setIsMessageVisible(false);
    setTimeout(() => setIsHomeVisible(true), 500); // Delay to allow welcome message fade-out
  };

  return (
    <HomeProvider>
      <Router>
        <div className="App">
          <MyHeader />
          {isMessageVisible && (
            <WelcomeMessage 
              onClose={handleCloseMessage} 
              isVisible={isMessageVisible} 
            />
          )}
          <div className={`content ${isHomeVisible ? 'fade-in' : 'fade-out'}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </Router>
    </HomeProvider>
  );
}

export default App;
