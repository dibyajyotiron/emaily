/* eslint-disable consistent-return */
const router = require('express').Router();

const auth = require('../middlewares/authMiddleware');
const validateCredits = require('../middlewares/validateCredits');

const {
  createSurvey,
  processEvent,
  voting,
  getSurveyByCurrentUser,
} = require('../controllers/surveyController');

router.get('/', [auth], getSurveyByCurrentUser);

router.get('/:surveyId/:choice', voting);

router.post('/webhooks', processEvent);

// eslint-disable-next-line no-unused-vars
router.post('/', [auth, validateCredits], createSurvey);

module.exports = router;
