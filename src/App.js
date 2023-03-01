import React from 'react';
import Login from './login.js';
import AppNavBar from './navBar.js';
import AppSpendingOverview from './overview.js'

function App() {
  return (
    <div>
      
      <h1>Welcome to BigBoiBudgeting app!</h1>
      <AppNavBar />
      <AppSpendingOverview />
      <Login />
    </div>
  );
}

export default App;
