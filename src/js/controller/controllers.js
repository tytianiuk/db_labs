'use strict';

const CONSTANTS = require('./constants.js');
const { pool } = require('../database/database.js');

const getMaxUserId = () => {
const scriptSQL = CONSTANTS.selectMaxId;

  return new Promise((resolve, reject) => {
    pool.query(scriptSQL, (error, result) => {
      return resolve(result);
    });
  });
};

const createUser = (req, res) => {
  if (!req.body) return res.sendStatus(CONSTANTS.badRequest);

  getMaxUserId().then((data) => {
    let maxId = data[0][CONSTANTS.maxId];
    const scriptscriptSQL = `INSERT INTO opinio.User (id, mail, password, name, age, gender) VALUES (${++maxId},"${req.body.mail}", "${req.body.password}", "${req.body.name}", ${req.body.age || CONSTANTS.empty}, "${req.body.gender || CONSTANTS.empty}")`;
    pool.query(scriptscriptSQL, (error, result) => {
      if (error) return res.status(CONSTANTS.internalServerError).json(error);
      result ? res.send(result) : res.sendStatus(CONSTANTS.notFound);
    });
  });
};

const updateUser = (req, res) => {
  if (!req.body) return res.sendStatus(CONSTANTS.badRequest);

  const updateFields = Object.keys(req.body);
  const updateValues = updateFields.map(field => `${field} = "${req.body[field]}"`).join(", ");
  const scriptSQL = `UPDATE opinio.User SET ${updateValues} WHERE id = ${req.params.id}`;
  
  pool.query(scriptSQL, (error, result) => {
    if (error) return res.status(CONSTANTS.internalServerError).json(error);
    result ? res.send(result) : res.sendStatus(CONSTANTS.notFound);
  });
};

const getUser = (req, res) => {
  const scriptSQL = `${CONSTANTS.select} ${req.params.id}`;

  pool.query(scriptSQL, (error, result) => {
    if (error) return res.status(CONSTANTS.internalServerError).json(error);
    result ? res.send(result) : res.sendStatus(CONSTANTS.notFound);
  });
};

const deleteUser = (req, res) => {
  const scriptSQL = `${CONSTANTS.delete} ${req.params.id}`;

  pool.query(scriptSQL, (error, result) => {
    if (error) return res.status(CONSTANTS.internalServerError).json(error);
    result ? res.send(result) : res.sendStatus(CONSTANTS.notFound);
  });
};

const getAllUsers = (req, res) => {
  const scriptSQL = CONSTANTS.selectAll;
  pool.query(scriptSQL, (error, result) => {
    if (error) return res.status(CONSTANTS.internalServerError).json(error);
    result ? res.send(result) : res.sendStatus(CONSTANTS.notFound);
  });
};

const deleteAllUsers = (req, res) => {
  const scriptSQL = CONSTANTS.deleteAll;
  pool.query(scriptSQL, (error, result) => {
    if (error) return res.status(CONSTANTS.internalServerError).json(error);
    result ? res.send(result) : res.sendStatus(CONSTANTS.notFound);
  });
};

module.exports = { 
  createUser, 
  updateUser, 
  getUser, 
  deleteUser, 
  getAllUsers, 
  deleteAllUsers,
};