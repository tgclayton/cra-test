const express = require('express')
const db = require('../db')

const router = express.Router()

//POST /users/add
router.post('/add', (req, res) => {
  db.addUser(req.body)
  .then(x => {
    res.send('Ok')
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

module.exports = router