const path = require('path')
const express = require('express')
const server = express()
const home = require('./routes/home')
// const users = require('../routes/users')

server.use(express.json())
console.log('dirname:', __dirname)
server.use(express.static(path.join(__dirname, 'build')))

server.use('/', home)

module.exports = server
