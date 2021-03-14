const express = require('express');
const { graphql, buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');
let collection;
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://sbk:6uHvj8ycBgQYxKe@sbkcluster1.4oybv.mongodb.net/userdb?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    collection = client.db("userdb").collection("users");


    collection.find().toArray(function (err, userDocuments) {
        if (err) {
            console.error(err);
        }
        console.log(userDocuments);
    });;
    // client.close();
});

// const { User } = require('./User');
const schema = buildSchema(//controller method
    `type User {
        name:String!,
        age:Int
    }
    type Mutation{
        user(name:String):String
    }
    type Query {
        getProducts(id:Int, name:String):String ,
        user: User 
    }`
)
class User {
    constructor(name) {
        this.name = name;
        this.age = 10;
    }
}
const root = {
    getProducts: function (user) {
        console.log(user);
        collection.insertOne(user).then(response => console.log(response));
        //Logic
        return 'Laptop'
    },
    user: function (user) {
        return new User('Pariwesh');
    }
    // }
}

const server = express();
server.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
server.listen(4000, function () {
    console.log('GraphQL server has started at port = 4000');
})