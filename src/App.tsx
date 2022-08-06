import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Main from './Components/Main';

const App = () => (
  <div className="App">
    {/* <h1>Dan</h1> */}
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  </div>
);

export default App;
