const express = require('express')
const { ModuleResolutionKind } = require('typescript')
const db = require('../db')

const router = express.Router()

// POST /data/findTodos
router.post('/findTodos', (req, res) => {
  const {username} = req.body
  db.getToDos(username)
  .then(todos => {
    res.send(todos)
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

//DELETE /data/todo
router.delete('/todo', (req, res) => {
  const {username, todo} = req.body
  db.deleteToDo(username, todo)
  .then(todos => {
    res.send(todos)
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

// POST /data/todos
router.post('/todos', (req, res) => {
  // console.log(`todos received: ${JSON.stringify(req.body)}`)
  // const {username, todo} = req.body
  db.addToDo(req.body)
  .then(() => {
    res.send('Added Todo')
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

  module.exports = router