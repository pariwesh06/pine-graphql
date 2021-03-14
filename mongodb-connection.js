
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://sbk:6uHvj8ycBgQYxKe@sbkcluster1.4oybv.mongodb.net/userdb?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const collection = client.db("userdb").collection("users");
client.connect(err => {
    collection.insertOne()

    collection.find().toArray(function(err, userDocuments) {
        if(err){
            console.error(err);
        }
        console.log(userDocuments);
      });;
    // client.close();
});

function saveUser(userDoc){
    console.log('testing');
}