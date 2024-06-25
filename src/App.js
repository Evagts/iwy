import React, { useState } from 'react';
import LoginPage from './LoginPage';
import NoteBoard from './NoteBoard';
import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="app">
      {loggedIn ? <NoteBoard /> : <LoginPage onLogin={setLoggedIn} />}
    </div>
  );
};

export default App;
