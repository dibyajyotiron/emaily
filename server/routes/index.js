const express = require('express');

const authRoute = require('./authRoutes');
const payment = require('./paymentRoutes');

const auth = require('../middlewares/authMiddleware');

module.exports = (app) => {
  app.use(express.json());
  app.use('/auth', authRoute);
  app.use('/api/payment', auth, payment);
};
