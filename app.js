

const express = require('express');
const connectDB = require('./db')


const register = express();
register.use(express.json());

const login = express();
login.use(express.json());

connectDB();


const route =require('./routers/register');
register.use('/', route);

const routes = require ("../app/routers/login")
login.use('/',routes)

register.get('/', (req, res) => {
    res.json({"message": "This is for testing"});
});

login.get('/', (req, res) => {
    res.json({"message": "This is for testing"});
});

const port = 4000;
const ports = 5000
register.listen(port, () => {
    console.log("API server started on port 4000");
})
login.listen(ports, () => {
    console.log("API server started on port 5000");
})