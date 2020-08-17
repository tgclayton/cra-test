import React, { useEffect } from "react";
import Todo from './Todo'
import '../styles/Home.css'



export default function Home (props) {
 const activeTodos = props.todos.filter(item => !item.complete)

// function handleKeyDown (e) {
//   if (e.key === 'Enter') {
//     e.preventDefault()
//     addTodo()
//   }
// }

  // useEffect(() => {
  //   document.addEventListener('keydown',  handleKeyDown)
  // })

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
  <div id = 'header-line'></div>
  {activeTodos.map((item, i) => {
      return (
        <>
      <Todo key = {`todo-${i}`} 
      date = {item.dateCreated}
      task = {item.task}
      completeTodo = {props.completeTodo}
      todoList = {props.todoList}
      ></Todo>
      <div className = 'line'></div>
      </>
      ) 
  })}
  <div className = 'todo'>
    <div className = 'complete-box'></div>
    <div className = 'task-box'>
    <form id = 'new-todo'>
    <input id = 'new-todo-input' type = 'text' placeholder = 'Add a new task'></input>
    </form>
    </div>
    <div className = 'date-box'></div>
  </div>
  </div>
  <br></br> <br></br> <br></br>
  <button onClick = {() => props.addTodo()}>add task</button>
</div>
)
}