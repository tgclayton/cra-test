
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Tom:LzIz1C5CA5Poh9Vl@toms-to-do.zkt6p.mongodb.net/todo-users?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// const connection = client
//     .connect()
//     .then(() => { console.log('Connected to mongoDB') })
//     .catch(e => {
//         console.error('Connection error', e.message)
//     })

const users = client.connect('users')
const todos = client.connect('todos')
const test = client.connect('test')

module.exports = {
logIn,
testDB
}

function logIn(username) {

}

async function testDB (db = test){
    try {
        const col = db.collection("test")
        // Insert a single document, wait for promise so we can read it back
        const p = await col.insertOne({test: 'test'});
        // Find one document
        const myDoc = await col.findOne();
    }
    catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
