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
    checkUserExists
}

function logIn(username) {

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
        const user = await col.findOne({ "username": username })
        return
    }
    catch (err) {
        console.log(err.stack);
    }
}

async function checkUserExists(username) {
    try {
        const found = getUser(username)
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

