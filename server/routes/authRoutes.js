const passport = require('passport');
const router = require('express').Router();

router.get(
  '/google/',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
);

router.get('/google/callback/', passport.authenticate('google'));

router.get('/logout', (req, res) => {
  req.logout();
  res.json({
    success: true,
    message: 'Successfully logged you out!',
  });
});

router.get('/me', (req, res) => {
  console.log(req.user);
  return res.send(req.user);
});
module.exports = router;
