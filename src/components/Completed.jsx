import React, { useState } from "react";
import Todo from './Todo'
import DeleteWindow from './DeleteWindow'
import '../styles/Completed.css'

export default function Completed (props) {
  const todos = props.todos.filter(item => item.complete)
  const [deleteWindow, setDelWindow] = useState(null)

  props.setPage('completed')

  // console.log(todos)
  const deleteAllButton = todos[0]? <button  id = 'clear-complete-button' onClick = {() => deletePrompt(null)}>Delete All</button>: null

  function deletePrompt (task) {
    let message
    if(task){
      message = 'Are you sure you want to delete this task?'
    } else {
      message = 'Are you sure you want to delete every completed task?'
    }

    setDelWindow (
      <DeleteWindow task = {task} 
      closeDelWindow = {closeDelWindow}
      deleteItem = {props.deleteItem}
      deleteAll = {props.deleteAllCompleted}
      message = {message}
      >
      </DeleteWindow> 
    )
  }

  function closeDelWindow () {
    setDelWindow(null)
  }

return (
  <div id = 'completed-page' className = 'full-page'>

  <div id = 'completed-list' className = "todo-list">
  {deleteWindow}
    <div id = 'header-todo' className = 'todo'>
      <div className = 'complete-box'>Restore to Active</div>
      <div className = 'task-box'>Task</div>
      <div className = 'date-box'>Date Completed</div>
      <div className = 'delete-box'>Delete</div>
    </div>
   <div id = 'header-line'></div>
   {todos.map((item, i) => {
       return (
        <>
      <Todo key = {`todo-${i}`} 
        date = {item.dateCompleted}
        task = {item.task}
        buttonFunc = {props.restoreItem}
        deletePrompt = {deletePrompt}
      ></Todo>
      <div className = 'line'></div>
      </>
      ) 
   })}
   <div className = 'completed-buffer'></div>
  <div id = 'clear-complete' 
    className = 'completed-buffer'>
    {deleteAllButton}
  </div>
</div>
</div>
)
}