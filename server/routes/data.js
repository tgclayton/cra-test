const express = require('express')
const { ModuleResolutionKind } = require('typescript')
const db = require('../db')

const router = express.Router()

// GET /data/todos
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

// POST /data/todos
router.post('/todos', (req, res) => {
  console.log(`todos received: ${JSON.stringify(req.body)}`)
  // const {username, todo} = req.body
  db.addToDo(req.body)
  .then(todos => {
    res.send(todos)
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

  module.exports = router