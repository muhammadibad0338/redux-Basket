import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Basket from './Component/Basket';
import  Home from './Component/Home';
import Navbar from './Component/Navbar';


function App() {
  return (
    <>
    <Router>
            <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route  exact path="/basket" component={Basket} />
                    <Route path="*" component={() => <h2>Error 404 <br></br> Page Not Found</h2>} />
                </Switch>
            </Router>
    </>
  );
}

export default App;