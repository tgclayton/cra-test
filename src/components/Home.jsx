import React from "react";
import Todo from './Todo'
import '../styles/Home.css'

export default function Home (props) {
return (
  <div id = 'home-page' className = 'full-page'>
  <h2>Home</h2>

  {/* Contains the list of todos*/}
  <div id = 'todo-list' className = "todo-list">
  
  </div>

  {/* Add a todo */}
  <button id = 'add-todo'>New Item</button>
</div>
)
}