const { User } = require('../models');

const userLogin = async (email, password) => {
  const user = await User.findOne({
    where: {
      email,
      password,
    },
  });

  if (!user) return undefined;

  return true;
};

module.exports = { userLogin };