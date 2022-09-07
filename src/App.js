import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import Error from './shared/pages/Error';

const App = () => {
  return (
    <Router>
      <MainNavigation/>
      <main>
        <Routes>
          <Route path="/" element={<Users/>}/>
          <Route path="/places/new" element={<NewPlace/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
