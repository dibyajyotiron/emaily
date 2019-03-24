/* eslint-disable class-methods-use-this */
const sendgrid = require('sendgrid');

const { mail: helper } = require('sendgrid');

const keys = require('../config/keys');

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();

    this.sgApi = sendgrid(keys.sendGridApiKey);
    this.from_email = new helper.Email('no-reply@emaily.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body);
    this.addClickTracking();

    this.addRecipients();
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => new helper.Email(email));
  }

  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);
    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    const personalize = new helper.Personalization();
    this.recipients.forEach((recipient) => {
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  }

  async sendToSendGrid() {
    try {
      const request = this.sgApi.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: this.toJSON(),
      });

      return await this.sgApi.API(request);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
module.exports = Mailer;
