import React from 'react'
import '../styles/DeleteWindow.css'

export default function DeleteWindow (props) {

function deleteItem (task) {
  if (task){
    props.closeDelWindow()
    props.deleteItem(task)
  } else {
    props.closeDelWindow()
    props.deleteAll()
  }

}

  return (
    <div className= 'delete-window'>
      <p>Are you sure you want to delete this task?</p>
      <div>
      <button className = 'delete-button' onClick = {() => deleteItem(props.task)}>Yes</button>
      <button className = 'delete-button' onClick = {() => props.closeDelWindow()}>No</button>
      </div>
    </div>
  )
}