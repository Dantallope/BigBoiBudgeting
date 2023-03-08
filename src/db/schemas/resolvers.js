const {User} = require('../models');
const { AuthenticationError } = require("apollo-server-express")
const { signToken } = require("../utils/auth")

const resolvers = {
    Query: {
      user: async (_, { id }) => {
        const user = await User.findById(id);
        return user;
      },
      users: async () => {
        const users = await User.find();
        return users;
      },
    },

    Mutation: {
        createUser: async (_, { id, email, password, budget }) => {
          const user = new User({ id, email, password, budget });
          await user.save();
          return user;
        },
        updateUser: async (_, { id, email, password, budget }) => {
          const user = await User.findByIdAndUpdate(id, { id, email, password, budget }, { new: true });
          return user;
        },
        signUp: async (parent, { username, email, password }) => {
          const user = await User.create({ username, email, password })
          const token = signToken(user)
          return { user, token }
        },
        signIn: async (parent, { email, password }) => {
          const user = await User.findOne({ email })
          if (!user) {
            throw new AuthenticationError("User not found.")
          }
          const validPassword = await user.validatePassword(password)
          if (!validPassword) {
            throw new AuthenticationError("Incorrect password.")
          }
          const token = signToken(user)
          return { user, token }
        },
      },
    };

    module.exports = resolvers;