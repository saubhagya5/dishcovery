// src/App.js
import React from 'react';
import './App.css'; // Include your CSS file here
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import App from './components/App'; // Import the App component

function MainApp() {
  return (
    <div>
      <App /> {/* Use the App component */}
    </div>
  );
}

export default MainApp;
