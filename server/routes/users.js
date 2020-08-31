const express = require('express')
const db = require('../db')

const router = express.Router()

//POST /users/add
router.post('/add', (req, res) => {
  console.log('req:', req.body)
  db.addUser(req.body)
  .then(x => {
    res.send('Ok')
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

//POST /users/check

router.post('/check/:name', (req, res) => {
  // console.log('req:', req.params.name)
  db.checkUserExists(req.params.name)
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})
module.exports = router

//POST /users/login

router.post('/login', (req, res) => {
  const {username, password} = req.body
  db.logIn(username, password)
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})
module.exports = router