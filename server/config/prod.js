module.exports = {
  googleClientID: process.env.googleClientID,
  googleClientSecret: process.env.googleClientSecret,
  mongoURI: `mongodb://${process.env.dbusername}:${
    process.env.dbpwd
  }@ds111078.mlab.com:11078/emaily-prod
  `,
  cookieKey: process.env.cookieKey,
};
