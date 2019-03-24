require('dotenv').config();

const express = require('express');

const app = express();
const logger = require('winston');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

const keys = require('./config/keys');

const port = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

require('express-async-errors');
require('colors');
require('./services/mongoose')();
require('./services/logger')();
require('./services/passport');

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  }),
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/index')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('/*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

app.listen(port, () => {
  logger.info(`${NODE_ENV}`.blue, 'Server started on port', `${port}...`.blue);
});
