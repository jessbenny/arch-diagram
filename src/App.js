import './App.css';
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import Basic from './pages/Basic';
import Advanced from './pages/Advanced';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/basic' element={<Basic/>} />
          <Route path='/advanced' element={<Advanced/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
