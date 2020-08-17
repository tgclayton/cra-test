import React from "react";
import Todo from './Todo'
import '../styles/Completed.css'

export default function Completed (props) {
  const todos = props.todos.filter(item => item.complete)
return (
  <div id = 'completed-page' className = 'full-page'>
  <h2>Completed</h2>

  <div id = 'completed-list' className = "todo-list">
    <div id = 'header-todo' className = 'todo'>
      <div className = 'complete-box'>Remove</div>
      <div className = 'task-box'>Task</div>
      <div className = 'date-box'>Date Completed</div>
    </div>
   <div id = 'header-line'></div>
   {todos.map((item, i) => {
       return (
        <>
      <Todo key = {`todo-${i}`} 
      date = {item.dateCompleted}
      task = {item.task}
      removeItem = {props.removeItem}
      ></Todo>
      <div className = 'line'></div>
      </>
      ) 
   })}
   <div className = 'completed-buffer'></div>
  <div id = 'clear-complete' className = 'completed-buffer'><button onClick = {() => props.clearCompleted()}>Clear Completed</button></div>
</div>
</div>
)
}