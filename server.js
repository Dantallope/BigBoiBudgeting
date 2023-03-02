const express = require('express')
const mongoose = require('mongoose')
const { ApolloServer } = require('apollo-server-express');

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

const port = process.env.PORT || 3001

app.get('/', (re, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server is running on localhost: ${port}`);
        console.log(`Use GraphQL at http://localhost:${port}${server.graphqlPath}`);
    })
  });