/* eslint-disable consistent-return */

const _ = require('lodash');
const { Path } = require('path-parser');
const { URL } = require('url');

const Survey = require('../models/survey');

const Mailer = require('../services/mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

module.exports = {
  // eslint-disable-next-line no-unused-vars
  async createSurvey(req, res) {
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
  },

  async getSurveyByCurrentUser(req, res) {
    const surveys = await Survey.find({
      _user: req.user.id,
    }).select({ recipients: false, _id: false });
    res.send(surveys);
  },

  voting(req, res) {
    res.json({
      message: 'Thanks for voting!',
    });
  },

  processEvent(req, res) {
    const parser = new Path('/api/surveys/:surveyId/:choice');

    const processedEvents = _.chain(req.body)
    // eslint-disable-next-line array-callback-return
      .map(({ url = '', event, email }) => {
        const match = url ? parser.test(new URL(url).pathname) : undefined;
        if (match) {
          return { email, ...match, event };
        }
      })
      .compact()
      .uniqBy('email', 'surveyId')
      .each(({ surveyId, email, choice }) => Survey.updateOne(
        {
          _id: surveyId,
          recipients: {
            $elemMatch: { email, responded: false },
          },
        },
        {
          $inc: { [choice]: 1 },
          $set: { 'recipients.$.responded': true },
          lastResponded: new Date(),
        },
      ).exec())
      .value();

    console.log(processedEvents);

    return res.send(processedEvents);
  },
};
