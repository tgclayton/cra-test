const express = require('express')
const db = require('../db/db')

const router = express.Router()

//POST /test
router.post('/', (req, res) => {
  db.testDB()
  .then(x => {
    res.send('Ok')
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})