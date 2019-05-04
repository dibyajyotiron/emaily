/* eslint-disable consistent-return */
const router = require('express').Router();

const auth = require('../middlewares/authMiddleware');
const validateCredits = require('../middlewares/validateCredits');

const {
  createSurvey,
  processEvent,
  voting,
} = require('../controllers/surveyController');

// eslint-disable-next-line no-unused-vars
router.post('/', [auth, validateCredits], createSurvey);

router.get('/:surveyId/:choice', voting);

router.post('/webhooks', processEvent);

module.exports = router;
