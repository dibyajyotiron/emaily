const passport = require('passport');
const router = require('express').Router();

router.get(
  '/google/',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
);

router.get('/google/callback/', passport.authenticate('google'), (req, res) => res.redirect('/surveys'));

router.get('/logout', (req, res) => {
  req.logout();
  // res.json({
  //   success: true,
  //   message: 'Successfully logged you out!',
  // });
  return res.redirect('/');
});

router.get('/me', (req, res) => res.send(req.user));
module.exports = router;
