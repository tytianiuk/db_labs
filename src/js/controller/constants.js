'use strict';

const CONSTANTS = {
  port: 3000,
  badRequest: 400,
  internalServerError: 500,
  notFound: 404,
  empty: null,
  maxId: 'MAX(id)',
  select: 'SELECT * FROM opinio.User WHERE id =',
  delete: 'DELETE FROM opinio.User WHERE id =',
  deleteAll: 'DELETE FROM opinio.User',
  selectAll: 'SELECT * FROM opinio.User',
  insert: 'INSERT INTO opinio.User (id, mail, password, name, age, gender) VALUES (?, ?, ?, ?, ?, ?)',
  selectMaxId: 'SELECT MAX(id) FROM opinio.User',
};

module.exports = CONSTANTS;