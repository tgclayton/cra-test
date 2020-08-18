import React from "react";
import Todo from './Todo'
import '../styles/Home.css'

export default function Home (props) {
 const activeTodos = props.todos.filter(item => !item.complete)

return (
  <div id = 'home-page' className = 'full-page'>
  <h2>Active</h2>

  {/* Contains the list of todos*/}
  <div id = 'todo-list' className = "todo-list">
  <div id = 'header-todo' className = 'todo'>
    <div className = 'complete-box'>Complete</div>
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
      buttonFunc = {props.completeTodo}
      todoList = {props.todoList}
      isHome = {true}
      ></Todo>
      <div className = 'line'></div>
      </>
      ) 
  })}
  <div className = 'todo'>
    <form id = 'new-todo'>
    <input id = 'new-todo-input' className = 'todo-input' type = 'text' placeholder = 'Add a new task'></input>
    </form>
  </div>
  </div>
</div>
)
}