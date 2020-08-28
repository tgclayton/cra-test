import React from 'react'
import '../styles/Login.css'
import { addUser, checkUserExists } from '../api'

export default function Login(props) {
  const { setUser } = props

  function getDetails() {
    const password = document.getElementById('password-input').value
    const username = document.getElementById('username-input').value
    return { password, username }
  }

  async function login() {
    const { password, username } = getDetails()
    setUser(username)
  }

  async function signUp() {
    const { password, username } = getDetails()
    const userExists = await checkUserExists(username)
    console.log('user exists:', userExists)
    if (password && username && userExists === 'false') {
      const user = {
        username,
        password
      }
      await addUser(user)
      setUser(username)
    }
  }

  return (
    <div id='login-window' className='ivory-back curvy-border'>
      <div id = 'login-header-container'>
        <h2 style={{ margin: 0 }}>Login</h2>
      </div>
      <div id = 'login-input-div' className = 'flex-col'>
        <label for='userInp'>Username</label>
        <input id='username-input' name='userInp' className='login-input' type='text'></input>
        <label for='passInp'>Password</label>
        <input id='password-input' name='passInp' className='login-input' type='password'></input>
        <br />
      </div>

      <div id = 'login-button-div' className='flex-row'>
        <button onClick={() => login()}>Login</button>
        <button onClick={() => signUp()}>Sign Up</button>
      </div>
    </div>
  )
}