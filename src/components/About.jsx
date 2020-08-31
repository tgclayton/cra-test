import React from 'react'
import '../styles/About.css'

export default function About(props) {
  props.setPage('about')

  return (
    <div id='about-page' className='full-page'>
      <div id='about-window' className="todo-list">
        <p>A simple app written to practice using Create-react-App and to learn React hooks.
        App uses Mongo Atlas for data handling, login feature is a placeholder and not is secure.
      </p>
        <p>
          Typing in a new to-do and pressing enter will add a new one, while clicking on
          an active to-do will allow the text to be edited. Duplicate text in to-dos is not allowed.
      </p>
      </div>
    </div>
  )
}