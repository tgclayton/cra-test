import React from "react";

export default function Todo (props) {
const {task, date} = props
return (
  <div className = 'todo'>
    <div className = 'complete-box'></div>
    <div>{task}</div>
    <div>{date}</div>
  </div>
)
}