const express = require('express');
const routes = express.Router();
const  userController = require('controller/userController');
routes.post('/user', userController.createUser);
routes.get('/user', userController.GetUser);
routes.get('/user/:id', userController.DeleteUser);
routes.put('/user/:id',userController.PutUser)
routes.post('/user/authenticateUser',userController.authenticateUser)
