import React from 'react';
import Login from './components/Login';
import Homepage from './components/Homepage';

const App = () => {
  // Implement routing or state management for login status
  const isLoggedIn = true;

  return (
    <div className="container">
      {isLoggedIn ? <Homepage /> : <Login />}
    </div>
  );
};

export default App;
