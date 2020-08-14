import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Dashboard from './components/Dashboard'
import './styles/App.css'
import About from './components/About'
import Home from './components/Home'
import Completed from './components/Completed'


export default function App() {
  return (
    <Router>
      <div id = 'app-container'>
      <div id = 'app-title' className = 'vert-center'>
        <h1>CRA ToDo</h1>
      </div>

      <div id = 'navbar' className = 'vert-center'>
        <Link to="/"><span class = 'nav-button'>Home</span></Link>
        <Link to="/about"><span class = 'nav-button'>About</span></Link>
        <Link to="/completed"><span class = 'nav-button'>Completed</span></Link>
      </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/completed">
            <Completed />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
