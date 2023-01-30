const { userLogin } = require('../services/login.service');
const { tokenGenerator } = require('../utils/jwt');

const userCheck = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const user = await userLogin(email, password);

    if (!user) { return res.status(400).json({ message: 'Invalid fields' }); }

    const token = tokenGenerator({ email });
    res.status(200).json({ token });
};

module.exports = {
    userCheck,
};