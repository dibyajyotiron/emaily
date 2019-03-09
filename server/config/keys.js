// console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  module.exports = require('./dev');
} else {
  console.log(require('./prod'));
  module.exports = require('./prod');
}
