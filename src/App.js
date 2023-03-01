import React, { useState } from 'react';
import Login from './login.js';
import AppNavBar from './navBar.js';
import AppSpendingOverview from './overview.js'

function App() {
  const [showLogin, setLogin] = useState(true) ;

  function handleClick() {
    setLogin(!showLogin);
  }

  return (
    <div>
      <h1>Welcome to BigBoiBudgeting app!</h1>
      <AppNavBar />
      <AppSpendingOverview />

      <div> {showLogin ? <Login onClick={handleClick} /> : <AppNavBar onClick={handleClick} />} </div>

    </div>
  );
}

export default App;
