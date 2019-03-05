const app = require('express')();
const logger = require('winston');

const port = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

require('./startup/logger')();

app.get('/', (req, res) => res.json({
  success: true,
  message: 'Successfully running',
}));

app.listen(port, () => {
  logger.info(`"${NODE_ENV}" Server started on port ${port}...`);
});
