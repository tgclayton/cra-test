import React, { useState } from "react";
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
import initTodos from './components/defaultTodos'


export default function App() {
  const [todoList, updateTodos] = useState(initTodos)
  return (
    <Router>
      <div id = 'app-container'>
      <div id = 'app-title' className = 'vert-center'>
        <h1>CRA ToDo</h1>
      </div>

      <div id = 'navbar' className = 'vert-center'>
        <Link to="/"><span className = 'nav-button'>Home</span></Link>
        <Link to="/about"><span className = 'nav-button'>About</span></Link>
        <Link to="/completed"><span className = 'nav-button'>Completed</span></Link>
      </div>
        <Switch>
          <Route exact path="/">
            <Home 
            todos = {todoList.filter(item => !item.complete)}
              updateTodos = {updateTodos}
              todoList = {todoList}
            />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/completed">
            <Completed  
            todos = {todoList.filter(item => item.complete)}
            updateTodos = {updateTodos}
            todoList = {todoList}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
