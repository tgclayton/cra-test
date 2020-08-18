import React from "react";
import '../styles/Todo.css'

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
} else {
  taskBox = <div  key = {`task${i}`} className = 'task-box'>
  {task}
  </div>
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
     <div className = 'complete-check-box' onClick = {() => props.deleteItem(task)}>X</div>
    </div>
  </div>
)
}