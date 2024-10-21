const express = require('express')
const routes = express.Router();
const login = require('../controllers/login')

routes.post('/login',login.login);
routes.post('/GetTask',login.GetTask);
routes.post('/DeleteTask',login.DeleteTask);
routes.post('/GetAllTask',login.GetAllTask);



module.exports = routes;