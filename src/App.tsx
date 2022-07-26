import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Main from './Components/Main';

const App = () => (
  <div className="App">
    {/* <h1>Dan</h1> */}
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  </div>
);

export default App;
