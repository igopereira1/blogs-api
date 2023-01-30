const { User } = require('../models');

const createUser = async (body) => {
  const { email } = body;
  const user = await User.findOne({ where: { email } });
  if (user) return undefined;
  const newUser = await User.create(body);
  return newUser;
};

const getUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
}; 

module.exports = { 
  createUser,
  getUsers,
 };
