module.exports = {
  googleClientID: process.env.googleClientID,
  googleClientSecret: process.env.googleClientSecret,
  mongoURI: `mongodb://${process.env.dbusername}:${
    process.env.dbpwd
  }@ds111078.mlab.com:11078/emaily-prod
  `,
  cookieKey: process.env.cookieKey,
  stripePublishableKey: process.env.stripePublishableKey,
  stripeSecretKey: process.env.stripeSecretKey,
  sendGridApiKey: process.env.sendGridApiKey,
  domain: 'https://quiet-plains-34576.herokuapp.com',
};
