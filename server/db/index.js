
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Tom:LzIz1C5CA5Poh9Vl@toms-to-do.zkt6p.mongodb.net/todo-users?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// const connection = client
//     .connect()
//     .then(() => { console.log('Connected to mongoDB') })
//     .catch(e => {
//         console.error('Connection error', e.message)
//     })
module.exports = {
logIn,
testDB
}

function logIn(username) {

}

async function testDB (){
const db = client.db('test')
    try {
       await client.connect()
        const col = db.collection("test")
        // Insert a single document, wait for promise so we can read it back
        await col.insertOne({test: 'test'});
        console.log('db updated')
    }
    catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
