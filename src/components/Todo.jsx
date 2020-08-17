import React from "react";
import '../styles/Todo.css'

export default function Todo (props) {
const {task, date, buttonFunc, i} = props
let taskBox = null
if (props.isHome) {
  taskBox = <div className = 'task-box' contentEditable>
  {task}
  </div>
} else {
  taskBox = <div className = 'task-box'>
  {task}
  </div>
}
return (
  <div className = 'todo' key = {`todo${i}`}>
    <div className = 'complete-box'><div className = 'complete-check-box' onClick = {() => buttonFunc(task)}></div></div>
    {taskBox}
    <div className = 'date-box'>{date}</div>
  </div>
)
}