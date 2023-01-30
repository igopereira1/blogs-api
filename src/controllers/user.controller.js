const userService = require('../services/user.service');
const { tokenGenerator } = require('../utils/jwt');

const createUser = async (req, res) => {
  const user = await userService.createUser(req.body);
  if (!user) { return res.status(409).json({ message: 'User already registered' }); }
  const token = tokenGenerator({ user });
  return res.status(201).json({ token });
};

const getUsers = async (_req, res) => {
  const user = await userService.getUsers();
  return res.status(200).json(user);
}; 

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  if (!user) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(user);
};

module.exports = { 
  createUser,
  getUsers,
  getUserById,
 };