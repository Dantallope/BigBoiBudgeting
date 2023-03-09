const express = require('express')
const path = require('path');
const db = require('./src/db/connection.js')
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./src/db/schemas/typeDefs');
const resolvers = require('./src/db/schemas/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = process.env.PORT || 3001

//app.get('/', (re, res) => {
  //  res.sendFile(path.join(__dirname, './public/index.html'));
  //});

  async function serverStart() {
  await server.start();

  db.once('open', () => {
    app.listen(port, () => {
      server.applyMiddleware({app});
        console.log(`Server is running on localhost: ${port}`);
        console.log(`Use GraphQL at http://localhost:${port}${server.graphqlPath}`);
    })}
  )};

  serverStart()