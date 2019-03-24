const express = require('express');

const authRoute = require('./authRoutes');
const payment = require('./paymentRoutes');
const survey = require('./surveyRoutes');

module.exports = (app) => {
  app.use(express.json());
  app.use('/auth', authRoute);
  app.use('/api/payment', payment);
  app.use('/api/surveys', survey);
};
