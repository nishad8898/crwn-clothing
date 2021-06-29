import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

//will represent hat page 
const HatPage =()=>(
  <div>
    <h1>Hat Page</h1>
  </div>
)

function App() { 
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop/hats' component={HatPage} />
    </div>
  );
}

export default App;
