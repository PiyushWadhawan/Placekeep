import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import Error from './shared/pages/Error';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';

const App = () => {
  return (
    <Router>
      <MainNavigation/>
      <main>
        <Routes>
          <Route path="/" element={<Users/>}/>
          <Route path="/:userId/places" element={<UserPlaces/>}></Route>
          <Route path="/places/new" element={<NewPlace/>}/>
          <Route path="/places/:placeId" element={<UpdatePlace/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
