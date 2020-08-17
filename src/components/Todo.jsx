import React from "react";
import '../styles/Todo.css'

export default function Todo (props) {
const {task, date, buttonFunc, i} = props

return (
  <div className = 'todo' key = {`todo${i}`}>
    <div className = 'complete-box'><div className = 'complete-check-box' onClick = {() => buttonFunc(task)}></div></div>
    <div className = 'task-box'>{task}</div>
    <div className = 'date-box'>{date}</div>
  </div>
)
}