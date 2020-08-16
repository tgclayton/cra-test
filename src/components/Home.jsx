import React, { useState } from "react";
import Todo from './Todo'
import initTodos from './defaultTodos'
import '../styles/Home.css'

export default function Home (props) {
  const [todos, addTodo]  = useState(initTodos.filter(item => !item.complete))
return (
  <div id = 'home-page' className = 'full-page'>
  <h2>To-do</h2>

  {/* Contains the list of todos*/}
  <div id = 'todo-list' className = "todo-list">
  <div id = 'header-todo' className = 'todo'>
    <div className = 'complete-box'>Completed</div>
    <div className = 'task-box'>Task</div>
    <div className = 'date-box'>Date Created</div>
  </div>
  {todos.map((item, i) => {
      return (
        <>
      <Todo key = {`todo-${i}`} 
      date = {item.dateCreated}
      task = {item.task}
      ></Todo>
      <hr></hr>
      </>
      ) 
  })}
  </div>

  {/* Add a todo */}
  <button id = 'add-todo'>New Item</button>
</div>
)
}