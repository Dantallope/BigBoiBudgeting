const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    budget: Int!
  }

  input SetBudgetInput {
    budget: Int
  }

  input CreateUserInput {
    username: String!
    email: String!
    password: String!
    budget: Int!
  }

  input SignUpUserInput {
    username: String!
    email: String!
    password: String!
    budget: Int!
  }
  
	type Auth {
		user: User!
		token: ID!
	}

  type Query {
    user(id: ID!): User
    users: [User]
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(_id: ID!, email: String!, password: String!, budget: Int!): User
    signUp(input: SignUpUserInput!): Auth
    signIn(email: String!, password: String!): Auth!
    setBudget(input: SetBudgetInput!): User
  }
`;

module.exports = typeDefs;