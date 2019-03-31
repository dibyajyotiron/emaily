const router = require('express').Router();
const keys = require('../config/keys');
// eslint-disable-next-line
const stripe = require("stripe")(keys.stripeSecretKey);

router.post('/', async (req, res) => {
  await stripe.charges.create({
    amount: 500,
    currency: 'usd',
    description: '$5 for 10 credits',
    source: req.body.id,
  });
  req.user.credits += 5;
  const user = await req.user.save();
  res.send(user);
});

module.exports = router;
