const localtunnel = require('localtunnel');
const logger = require('./services/logger');

localtunnel(5000, { subdomain: 'dijyghosal' }, (err, tunnel) => {
  logger.log('Local Tunnel running');
});
