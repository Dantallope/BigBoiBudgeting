import React from 'react';
import AppNavBar from './navBar.js';
import AppSpendingOverview from './overview.js'

function App() {
  return (
    <div>
      
      <h1>Welcome to BigBoiBudgeting app!</h1>
      <AppNavBar />
      <AppSpendingOverview />
    </div>
  );
}

export default App;
