const path = require('path')
const express = require('express')
const server = express()
// const users = require('../routes/users')
// const data = require('../routes/data')

server.use(express.json())
console.log('dirname:', __dirname)
server.use(express.static(path.join(__dirname, '../public')))

// server.use('/users', users)
// server.use('/data', data)

module.exports = server
