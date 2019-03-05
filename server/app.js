const app = require('express')();
const logger = require('winston');

const port = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

const router = require('./routes/index');

require('./startup/logger')();

app.use('/', router);

app.listen(port, () => {
  logger.info(`"${NODE_ENV}" Server started on port ${port}...`);
});
