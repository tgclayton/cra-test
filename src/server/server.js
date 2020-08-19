const path = require('path')
const express = require('express')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

// server.use(express.static('public'))
// server.use('/', home)
// server.use('/saves', saves)

module.exports = server