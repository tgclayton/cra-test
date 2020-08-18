import React, { useState, useEffect } from "react";
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
 const addTodo = () => {
    const task = document.getElementById('new-todo-input').value
    if (task && todoList.every(item => item.task !== task)){
    const currentDate = new Date()
    const todo = {
      task: task,
      dateCreated: currentDate.getDate() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getFullYear(),
      complete: false,
      dateCompleted: null,
    }
    const newTodoList = [...todoList]
    newTodoList.push(todo)
    updateTodos(newTodoList)
    document.getElementById('new-todo').reset()
  }
  }

 const completeTodo = (task) => {
    const i = todoList.findIndex(item => item.task === task)
    const currentDate = new Date()
    todoList[i].complete = true
    todoList[i].dateCompleted = currentDate.getDate() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getFullYear()
    const newTodoList = [...todoList]
    updateTodos(newTodoList)
  }

  const clearCompleted = () => {
    const newTodoList = todoList.filter(item => !item.complete)
    updateTodos(newTodoList)
  }
  
  const restoreItem = (task) => {
    const i = todoList.findIndex(item => item.task === task)
    todoList[i].complete = false
    todoList[i].dateCompleted = null
    const newTodoList = [...todoList]
    updateTodos(newTodoList)
  }

  const updateItem = (target) => {
    const i = todoList.findIndex(item => item.task === target.id)
    todoList[i].task = target.innerText
    const newTodoList = [...todoList]
    updateTodos(newTodoList)
  }

  function handleKeyDown (e) {
    const focused = document.activeElement
    if (e.key === 'Enter') {
      e.preventDefault()
      if(focused.id === "new-todo-input") {
      addTodo()
      } else {
      updateItem(focused)
      }
  }
}

  useEffect(() => {
    document.addEventListener('keydown',  handleKeyDown)
  })

  return (
    <Router>
      <div id = 'app-container'>
      <div id = 'app-title' className = 'vert-center'>
        <h1>C-R-A ToDo</h1>
      </div>

      <div id = 'navbar' className = 'vert-center'>
        <Link to="/" className = 'nav-button'>Active</Link>
        <Link to="/completed" className = 'nav-button'>Completed</Link>
        <Link to="/about" className = 'nav-button'>About</Link>
      </div>
        <Switch>
          <Route exact path="/">
            <Home 
            todos = {todoList.filter(item => !item.complete)}
              addTodo = {addTodo}
              completeTodo = {completeTodo}
              todoList = {todoList}
            />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/completed">
            <Completed  
            todos = {todoList.filter(item => item.complete)}
            restoreItem = {restoreItem}
            clearCompleted = {clearCompleted}
            todoList = {todoList}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
