import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch,Routes} from "react-router-dom";
import Home from "./components/Home"
import CricketerProfile from './components/CricketerProfile';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/my-app" component={Home}/>
          <Route path="/my-app/:id" component={CricketerProfile}/>
        </Switch>
    </Router> 
  );
}

export default App;
