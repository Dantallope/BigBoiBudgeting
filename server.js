const express = require('express')
const path = require('path');
const db = require("./src/db/connection")
const { ApolloServer } = require('apollo-server-express');

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

server.applyMiddleware({app});

const port = process.env.PORT || 3001

app.get('/', (re, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });
async function serverStart() {
  await server.start();

  db.once('open', () => {
    app.listen(port, () => {
        console.log(`Server is running on localhost: ${port}`);
        console.log(`Use GraphQL at http://localhost:${port}${server.graphqlPath}`);
    })}
  )};

  serverStart()