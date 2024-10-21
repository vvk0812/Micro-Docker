const express = require('express')
const route = express.Router();
const registration = require('../controllers/registration')

route.post('/Register',registration.Register);
route.post('/createTask',registration.createTask);
route.post('/UpdateTask',registration.UpdateTask);
route.post('/CompleteTask',registration.CompleteTask);

module.exports = route;