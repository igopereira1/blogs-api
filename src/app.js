const express = require('express');
const userController = require('./controllers/login.controller');

// ...

const app = express();

app.use(express.json());
app.post('/login', userController.userCheck);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
