const winston = require('winston');
const path = require('path');

const appDir = path.dirname(require.main.filename);

module.exports = () => {
  winston.handleExceptions(
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      colorize: true,
      prettyPrint: true,
    }),
    new winston.transports.File({
      level: 'info',
      filename: `${appDir}/logs/uncaughtExceptions.log`,
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      colorize: true,
    }),
  );


  process.on('unhandledRejection', (ex) => {
    throw ex;
  });

  winston.add(winston.transports.File, {
    filename: `${appDir}/logs/all.log`,
  });
};
