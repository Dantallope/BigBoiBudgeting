const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    password: String!
    budget: Int!
  }

  type Query {
    user(id: ID!): User
    users: [User]
  }

  type Mutation {
    createUser(_id: ID!, email: String!, password: String!, budget: Int!): User
    updateUser(_id: ID!, email: String!, password: String!, budget: Int!): User
  }
`;

module.exports = typeDefs;