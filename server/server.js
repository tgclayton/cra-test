const path = require('path')
const express = require('express')
const server = express()
const home = require('./routes/home.js')
const test = require('./routes/test.js')
// const users = require('../routes/users')

server.use(express.json())
console.log('dirname:', __dirname)
server.use(express.static(path.join(__dirname, 'build')))

server.use('/', home)
server.use('/test', test)
module.exports = server
