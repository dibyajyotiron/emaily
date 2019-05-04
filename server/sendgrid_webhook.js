const localtunnel = require('localtunnel');
const logger = require('winston');

localtunnel(5000, { subdomain: 'dijyghosal' }, (err, tunnel) => {
  logger.info('Local Tunnel running');
});
