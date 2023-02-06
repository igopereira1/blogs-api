const validationUser = (req, res, next) => {
  const regExp = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  const { displayName, email, password } = req.body;

  if (!regExp.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  if (displayName.length < 8) {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  if (password.length < 6) {
    return res.status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
  }

  next();
};

module.exports = { validationUser };