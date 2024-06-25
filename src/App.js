import React, { useState } from 'react';
import './App.css';
import NoteBoard from './NoteBoard';
import Login from './LoginPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (password) => {
    const correctPassword = '30112008';
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Contraseña incorrecta');
    }
  };

  return (
    <div className="App">
      <div className="App-overlay">
        <header className="App-header">
          <h1>Te Quiero Mucho Preciosa ❤️</h1>
        </header>
        {isAuthenticated ? (
          <NoteBoard />
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </div>
  );
}

export default App;
