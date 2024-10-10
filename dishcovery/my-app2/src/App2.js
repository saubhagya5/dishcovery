import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Frame11 from './Frame11'; // Adjust the import based on your file structure
import Home from './Home'; // Make sure to create this component

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home component */}
            <Route path="/frame11" element={<Frame11 />} /> {/* Frame11 component */}
          </Routes>
          <a
            className="App-link"
            href="/frame11" // Update to use routing
          >
            Go to Frame 11
          </a>
        </header>
      </div>
    </Router>
  );
}

export default App;
