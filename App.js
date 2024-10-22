import React from 'react';
import './App.css';

import RECIPE from './eight/recipe';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        
        {/* Update recipe routes */}
        <Route path="/recipe" element={<RECIPE />} />
        <Route path="/recipes/:id" element={<RECIPE />} /> {/* For individual recipe */}

      </Routes>
    </Router>
  );
}

export default App;
