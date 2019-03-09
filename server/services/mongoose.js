const winston = require('winston');
const mongoose = require('mongoose');
const { mongoURI } = require('../config/keys');

module.exports = () => {
  mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    .then(() => {
      if (process.env.NODE_ENV !== 'production') return winston.info('Connected to', `${mongoURI}...`.yellow);
      return winston.info('connected to production environment of mongodb...'.blue);
    })
    .catch(ex => winston.error(`${ex.message}`));
};
