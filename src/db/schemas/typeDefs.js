const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    password: String!
    budget: Int!
  }
`;

module.exports = typeDefs;
