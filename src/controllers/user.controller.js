const userService = require('../services/user.service');
const { tokenGenerator } = require('../utils/jwt');

const createUser = async (req, res) => {
  const user = await userService.createUser(req.body);
  if (!user) { return res.status(409).json({ message: 'User already registered' }); }
  const token = tokenGenerator({ user });
  return res.status(201).json({ token });
};

module.exports = { createUser };