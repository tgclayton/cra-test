const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Tom:<0Penfortom1>@toms-to-do.zkt6p.mongodb.net/<todos>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object

  client.close();
});