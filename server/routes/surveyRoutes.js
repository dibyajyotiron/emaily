const router = require('express').Router();

const Survey = require('../models/survey');

const Mailer = require('../services/mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const auth = require('../middlewares/authMiddleware');
const validateCredits = require('../middlewares/validateCredits');

// eslint-disable-next-line no-unused-vars
router.post('/', [auth, validateCredits], async (req, res) => {
  const { title, subject } = req.body;
  const { body, recipients } = req.body;

  const survey = new Survey({
    title,
    subject,
    body,
    recipients: recipients.split(',').map(email => ({ email })),
    _user: req.user.id,
    dateSent: Date.now(),
  });
  try {
    // send email
    const mailer = new Mailer(survey, surveyTemplate(survey));
    await mailer.sendToSendGrid();
    await survey.save();
    req.user.credits -= 1;
    await req.user.save();
    res.send(req.user);
  } catch (error) {
    res.status(422).json({
      error: true,
      message: error.message,
    });
  }
});

router.get('/', (req, res) => {
  res.json({
    message: 'Thanks for voting!',
  });
});

router.post('/webhooks', (req, res) => {
  console.log(req.body);
  res.send({});
});

module.exports = router;
