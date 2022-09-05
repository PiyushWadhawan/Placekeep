import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import Error from './shared/pages/Error';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users/>}/>
        <Route path="/places/new" element={<NewPlace/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
