import React from "react";
import '../styles/Todo.css'
// import { Link } from 'react-router-dom'

export default function Todo (props) {
const {task, date, buttonFunc, i} = props

// Sets task description ot be editable in active but not in completed
let taskBox = null
if (props.isHome) {
  taskBox = <div id = {`${props.task}`} 
    key = {`task${i}`} 
    className = 'task-box' 
    onKeyDown = {(e) => props.taskKeyDown(e)}
    contentEditable>
    {task}
    </div>
    // delLink = '/delete'
} else {
  taskBox = <div  key = {`task${i}`} className = 'task-box'>
  {task}
  </div>
  // delLink = '/completed/delete'
}

return (
  <div className = 'todo' key = {`todo${i}`}>
    <div key = {`complete${i}`} className = 'complete-box'>
      <div className = 'complete-check-box' onClick = {() => buttonFunc(task)}>
      </div>
    </div>
    {taskBox}
    <div key = {`date${i}`} className = 'date-box'>{date}</div>
    <div className = 'delete-box'>
    {/* <Link to = {delLink} className = 'complete-check-box'>X</Link> */}
     <div className = 'complete-check-box' onClick = {() => props.deletePrompt(task)}>X</div>
    </div>
  </div>
)
}