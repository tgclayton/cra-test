require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;
// console.log(process.env.REACT_APP_DB_ACCESS)
// console.log(process.env)
const uri = process.env.REACT_APP_DB_ACCESS
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
}

async function addUser(user) {
    const db = client.db('To-do-data')
    try {
        const col = db.collection("users")
        await col.insertOne(user)
        // console.log('user added:', user)
    }
    catch (err) {
        console.log(err.stack);
    }
}

async function getUser(username) {
    const db = client.db('To-do-data')
    try {
        const col = db.collection("users")
        const user = await col.findOne({ "username": username}, {"projection": {"username": 1}})
        return user
    }
    catch (err) {
        console.log(err.stack);
    }
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
        console.log(err.stack);
    }
}
