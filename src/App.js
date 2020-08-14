import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Dashboard from './components/Dashboard'
import About from './components/About'
import Home from './components/Home'


export default function BasicExample() {
  return (
    <Router>
      <div id = 'app-container'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {/* <Route path="/dashboard">
            <Dashboard />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}
