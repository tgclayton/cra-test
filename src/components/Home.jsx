import React, { useState } from "react";
import Todo from './Todo'
import '../styles/Home.css'
import DeleteWindow from "./DeleteWindow";

export default function Home (props) {
 const activeTodos = props.todos.filter(item => !item.complete)
 const [deleteWindow, setDelWindow] = useState(null)

 props.setPage('active')
  function deletePrompt (task) {
    setDelWindow (
      <DeleteWindow task = {task} 
      closeDelWindow = {closeDelWindow}
      deleteItem = {props.deleteItem}
      message = 'Are you sure you want to delete this task?'
      ></DeleteWindow> 
    )
  }

  function closeDelWindow () {
    setDelWindow(null)
  }

  return (
    <div id = 'home-page' className = 'full-page'>
    {/* Contains the list of todos*/}
    <div id = 'todo-list' className = "todo-list">
    {deleteWindow}
    <div id = 'header-todo' className = 'todo'>
      <div className = 'complete-box'>Complete</div>
      <div className = 'task-box'>Task</div>
      <div className = 'date-box'>Date Created</div>
      <div className = 'delete-box'>Delete</div>
    </div>
    <div id = 'header-line'></div>
    {activeTodos.map((item, i) => {
        return (
          <>
        <Todo key = {`todo-${i}`} 
        date = {item.dateCreated}
        task = {item.task}
        buttonFunc = {props.completeTodo}
        todoList = {props.todoList}
        isHome = {true}
        taskKeyDown = {props.taskKeyDown}
        deletePrompt = {deletePrompt}
        ></Todo>
        <div className = 'line'></div>
        </>
        ) 
    })}

    <div className = 'todo' id = 'new-todo'>
      {/* <form id = 'new-todo'> */}
      <input id = 'new-todo-input' 
      className = 'todo-input' 
      autoComplete = 'off'
      type = 'text' 
      placeholder = 'Add a new task'
      onKeyDown = {(e) => props.inputKeyDown(e)}
      >
      </input>
      {/* </form> */}
    </div>
    </div>
  </div>
  )
}