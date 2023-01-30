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

const getUserById = async (id) => {
  const userById = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  return userById;
};

module.exports = { 
  createUser,
  getUsers,
  getUserById,
 };
