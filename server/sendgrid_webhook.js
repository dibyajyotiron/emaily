const localtunnel = require('localtunnel');

localtunnel(5000, { subdomain: 'dijyghosal' }, (err, tunnel) => {
  console.log('Local Tunnel running');
});
