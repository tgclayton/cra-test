require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;
// console.log(process.env.REACT_APP_DB_ACCESS)
// console.log(process.env)
// process.env.REACT_APP_DB_ACCESS
const uri = 'mongodb+srv://todoUser:Y2BxhXx1SY2IfdkA@toms-to-do.zkt6p.mongodb.net/todo-users?retryWrites=true&w=majority'
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client
    .connect()
    .then(() => { console.log('Connected to mongoDB') })
    .catch(e => {
        console.error('Connection error', e.message)
    })

module.exports = {
    logIn,
    addUser,
    checkUserExists,
    addToDo,
    getToDos,
    deleteToDo
}

async function addUser(user) {
    const db = client.db('To-do-data')
    try {
        const col = db.collection("users")
        await col.insertOne(user)
        
    }
    catch (err) {
        console.log(err.stack);
    }
}

async function getToDos (username) {
    try {
        const db = client.db('To-do-data')
        const col = db.collection("todos")
        const todos = await col.find({'username': username})
        return todos
    }
    catch (err) {
        console.log(err.stack);
    }
}

async function addToDo (todo) {
    // console.log(`data received ${username}, ${todo}`)
    const db = client.db('To-do-data')
    const col = db.collection("todos")
    await col.insertOne(todo)
}

async function deleteToDo (username) {
    const db = client.db('To-do-data')
    const col = db.collection("todos")
}

async function logIn(username, password) {
    const db = client.db('To-do-data')
    const col = db.collection("users")
    const user = await col.findOne({ "username": username, "password": password}, {"projection": {"username": 1}})
    if (user) {
        return 'true'
    } else {
        return 'false'
    }
}

async function checkUserExists(username) {
    try {
        const db = client.db('To-do-data')
        const col = db.collection("users")
        const found = await col.findOne({ "username": username}, {"projection": {"username": 1}})
        console.log('found:', found)
        if (found) {
            return 'true'
        } else {
            return 'false'
        }
    }
    catch (err) {
        console.log(err.stack)
    }
}
