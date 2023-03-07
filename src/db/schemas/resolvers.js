const {User} = require('../models');

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
        createUser: async (_, { id, email, password }) => {
          const user = new User({ id, email, password });
          await user.save();
          return user;
        },
        updateUser: async (_, { id, email, password }) => {
          const user = await User.findByIdAndUpdate(id, { id, email, password }, { new: true });
          return user;
        },
      },
    };

    module.exports = resolvers;