var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: Int
  }
  type Query {
    rollDice(numDice: Int!, numSides: Int): [Int]
  }
`);

var root = { hello: () => 3};

var app = express();

app.use('/graphql', graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
}));

app.listen(1212);
console.log('Running gql at http://localhost:1212/graphql');
