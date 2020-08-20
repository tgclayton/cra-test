import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './styles/App.css'
import About from './components/About'
import Home from './components/Home'
import Completed from './components/Completed'
import DeleteWindow from './components/DeleteWindow'

export default function App(props) {
  const startState = localStorage.getItem('storedTodos')? JSON.parse(localStorage.getItem('storedTodos')) : [{
    task: 'Add a to-do',
    dateCreated: '-',
    complete: false,
    dateCompleted: null,
  }]
  // console.log(startState)
  const [todoList, updateTodos] = useState(startState)
  const [currentPage, updatePage] = useState('active')

  // console.log(todoList)
   useEffect (() => {
    document.getElementById('active-button').classList.remove('dark-background')
    document.getElementById('completed-button').classList.remove('dark-background')
    const current = currentPage + '-button' 
    document.getElementById(current).classList.toggle('dark-background')
   })

   function setPage(page) {
     updatePage(page)
   }

 const addTodo = () => {
   const input = document.getElementById('new-todo-input')
    const task = input.value
    input.value = null
    input.blur()
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
    updateStorage(newTodoList)
    updateTodos(newTodoList)
  }
  }

 const completeTodo = (task) => {
    const i = todoList.findIndex(item => item.task === task)
    const currentDate = new Date()
    todoList[i].complete = true
    todoList[i].dateCompleted = currentDate.getDate() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getFullYear()
    const newTodoList = [...todoList]
    updateStorage(newTodoList)
    updateTodos(newTodoList)
  }

  const clearCompleted = () => {
    const newTodoList = todoList.filter(item => !item.complete)
    updateStorage(newTodoList)
    updateTodos(newTodoList)
  }
  
  const restoreItem = (task) => {
    const i = todoList.findIndex(item => item.task === task)
    todoList[i].complete = false
    todoList[i].dateCompleted = null
    const newTodoList = [...todoList]
    updateStorage(newTodoList)
    updateTodos(newTodoList)
  }

  const updateItem = (target) => {
    const i = todoList.findIndex(item => item.task === target.id)
    todoList[i].task = target.innerText
    const newTodoList = [...todoList]
    updateStorage(newTodoList)
    updateTodos(newTodoList)
  }

  function deleteItem(task) {
    const newTodoList = todoList.filter(item => item.task !== task)
    updateStorage(newTodoList)
    updateTodos(newTodoList)
  }

  function inputKeyDown (e) {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  function taskKeyDown (e) {
    const focused = document.activeElement
    if (e.key === 'Enter') {
      updateItem(focused)
      } 
  }

  function updateStorage (data) {
    localStorage.removeItem('storedTodos')
    localStorage.setItem('storedTodos', JSON.stringify(data))
  }

  return (
    <Router>
      <div id = 'app-container'>
      <div id = 'app-title' className = 'vert-center'>
        <h1>Tom's ToDo</h1>
      </div>

      <div id = 'navbar' className = 'vert-center'>
        <Link to="/" className = 'nav-button' id = 'active-button' onClick = {() => updatePage('active')}>Active</Link>
        <Link to="/completed" className = 'nav-button' id = 'completed-button' onClick = {() => updatePage('completed')}>Completed</Link>
        {/* <Link to="/about" className = 'nav-button'>About</Link> */}
      </div>
      
        <Switch>
          <Route exact path="/">
            <Home 
            todos = {todoList.filter(item => !item.complete)}
              addTodo = {addTodo}
              completeTodo = {completeTodo}
              todoList = {todoList}
              inputKeyDown = {inputKeyDown}
              taskKeyDown = {taskKeyDown}
              deleteItem = {deleteItem}
              setPage = {setPage}
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
            deleteItem = {deleteItem}
            todoList = {todoList}
            setPage = {setPage}
            />
          </Route>
          <Route path="/completed/delete">
            <DeleteWindow/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
