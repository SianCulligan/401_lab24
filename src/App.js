import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Nav from './components/Nav';

function App() {
  let links = [
    {displayName: 'Home', url: '/'}, {displayName: 'About', url:'/about'}, {displayName:'Contact', url:'/contact'}
];
  return (
    <div className="App">
     <Nav links={links} />
     <BrowserRouter>
        <Route path='/' exact={true}>
          <h1>HOME</h1>
        </Route>

        <Route path='/about' exact={true}>
          <h1>ABOUT</h1>
        </Route>

        <Route path='/contact' exact={true}>
          <h1>CONTACT</h1>
        </Route>


     </BrowserRouter> 
    </div>
  );
}

export default App;
