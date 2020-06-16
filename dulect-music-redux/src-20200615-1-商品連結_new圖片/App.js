import React from 'react';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";

import HomeApp from'./container/home-app';
import Footer from'./components/footer/footer';

function App() {
  return (
    <Router>
      <>
      <Route path="/" exact>
        <HomeApp />
      </Route>
      </>
    </Router>
  )
}

export default App;
