const { User } = require('../models');

const createUser = async (body) => {
  const { email } = body;
  const user = await User.findOne({ where: { email } });
  if (user) return undefined;
  const newUser = await User.create(body);
  return newUser;
};

module.exports = { createUser };