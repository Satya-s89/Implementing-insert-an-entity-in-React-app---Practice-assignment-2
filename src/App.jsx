import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddMovie from './AddMovie';

const App = () => {
  return (
      
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/addmovie' element={<AddMovie/>}/>
      </Routes>
    </Router>
  );
};

export default App;