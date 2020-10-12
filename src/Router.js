import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import ProductItem from './Components/ProductItem';
import NavBar from './Components/NavBar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Routes() {
  return (
    <div>
        <Router>
          <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route exact path="/product" component={Product} />
              <Route path="/product/:id" component={ProductItem} />
              <Route path="*" component={()=> <h2>404 Not Found</h2>} /> 
            </Switch>
        </Router>
    </div>
  );
}

export default Routes;