// src/App.js

import React, { useState } from 'react';
import LoginPage from './LoginPage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <div className="main-content">
          <h1>Welcome to the main page</h1>
        </div>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
