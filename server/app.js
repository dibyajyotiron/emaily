require('dotenv').config();

const app = require('express')();
const logger = require('winston');

const port = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

require('./services/logger')();
require('./services/passport');

require('./routes/index')(app);

app.listen(port, () => {
  logger.info(`"${NODE_ENV}" Server started on port ${port}...`);
});
