const express = require('express')
const db = require('../db')

const router = express.Router()

// get /data/todos
router.get('/todos', (req, res) => {
  const {username} = req.body
  db.getToDos(username)
  .then(todos => {
    res.send(todos)
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

// post /data/todos
router.post('/todos', (req, res) => {
  const {username, todo} = req.body
  db.getToDos(username)
  .then(todos => {
    res.send(todos)
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})