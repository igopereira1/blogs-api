const express = require('express');
const loginController = require('./controllers/login.controller');
const userController = require('./controllers/user.controller');
const { validationUser } = require('./middlewares/validationUser');

// ...

const app = express();

app.use(express.json());
app.post('/login', loginController.userCheck);
app.post('/user', validationUser, userController.createUser);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
