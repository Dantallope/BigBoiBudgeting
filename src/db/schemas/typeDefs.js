const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    password: String!
    budget: Int!
  }

  input CreateUserInput {
    email: String!
    password: String!
    budget: Int!
  }

  
	type Auth {
		user: User
		token: ID!
	}

  type Query {
    user(id: ID!): User
    users: [User]
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(_id: ID!, email: String!, password: String!, budget: Int!): User
  }
`;

module.exports = typeDefs;