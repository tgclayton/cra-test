import React from 'react'
import '../styles/About.css'

export default function About() {
  return (
    <div id = 'about-page' className = 'full-page'>
      <h2>About</h2>
      <div id = 'about-window' className = "todo-list">
      <p>A simple app written to practice using Create-react-App and to learn React hooks.
      In the course of writing it I also learned about localStorage and used that as well.
      </p>
      <p>
        Typing in a new to-do and pressing enter will add a new one, while clicking on 
        an active to-do will allow the text to be edited. Duplicate text in to-dos is not allowed.
      </p>
      </div>
    </div>
  )
}