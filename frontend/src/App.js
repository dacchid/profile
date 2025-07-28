import React from 'react';
import "./App.css";
import { HashRouter , Routes, Route } from "react-router-dom";
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <HashRouter >
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </HashRouter >
    </div>
  );
}

export default App;