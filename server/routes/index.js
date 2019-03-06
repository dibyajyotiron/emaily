const express = require('express');
const auth = require('./authRoutes');

module.exports = (app) => {
  app.use(express.json());
  app.use('/auth', auth);
};
