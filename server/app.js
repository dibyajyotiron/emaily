require('dotenv').config();

const app = require('express')();
const logger = require('winston');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

const port = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

require('colors');
require('./services/mongoose')();
require('./services/logger')();
require('./services/passport');

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  }),
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/index')(app);

app.listen(port, () => {
  logger.info(`${NODE_ENV}`.blue, 'Server started on port', `${port}...`.blue);
});
