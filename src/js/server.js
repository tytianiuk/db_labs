'use strict';

const express = require('express');
const CONSTANTS = require('./controller/constants.js')

const {
  createUser, 
  updateUser, 
  getUser, 
  deleteUser, 
  getAllUsers, 
  deleteAllUsers,
} = require('./controller/controllers.js');

const app = express()
.use(express.json())
.get('/user/:id', getUser)
.get('/users/', getAllUsers)
.post('/user/', createUser)
.put('/user/:id', updateUser)
.delete('/user/:id', deleteUser)
.delete('/users/', deleteAllUsers);


app.listen(CONSTANTS.port, () => {
  console.log(`Server running on port ${CONSTANTS.port}`);
});
