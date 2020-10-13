const path = require('path')
const express = require('express')
const server = express()
const home = require('./routes/home.js')
// const test = require('./routes/test.js')
const users = require('./routes/users.js')
const data = require('./routes/data.js')

server.use(express.json())
console.log('dirname:', __dirname)
server.use(express.static(path.join(__dirname, 'build')))

server.use('/', home)
// server.use('/test', test)
server.use('/users', users)
server.use('/data', data)

module.exports = server
