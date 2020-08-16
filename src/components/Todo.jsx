import React from "react";
import '../styles/Todo.css'

export default function Todo (props) {
const {task, date} = props
return (
  <div className = 'todo'>
    <div className = 'complete-box'><div className = 'complete-check-box'></div></div>
    <div className = 'task-box'>{task}</div>
    <div className = 'date-box'>{date}</div>
  </div>
)
}