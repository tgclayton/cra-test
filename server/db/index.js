
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Tom:LzIz1C5CA5Poh9Vl@toms-to-do.zkt6p.mongodb.net/todo-users?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = client
   .connect()
   .then(() => {console.log('Connected to mongoDB')})
   .catch(e => {
    console.error('Connection error', e.message)
})

module.exports = db