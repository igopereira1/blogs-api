const express = require('express');
const loginController = require('./controllers/login.controller');
const userController = require('./controllers/user.controller');
const categoryController = require('./controllers/category.controller');
const postController = require('./controllers/post.controller');
const { validationUser } = require('./middlewares/validationUser');
const { validationToken } = require('./middlewares/validationToken');

// ...

const app = express();

app.use(express.json());
app.post('/login', loginController.userCheck);
app.post('/user', validationUser, userController.createUser);
app.get('/user', validationToken, userController.getUsers);
app.get('/user/:id', validationToken, userController.getUserById);
app.post('/categories', validationToken, categoryController.createCategory);
app.get('/categories', validationToken, categoryController.getAllCategories);
app.get('/post', validationToken, postController.getAllPosts);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
