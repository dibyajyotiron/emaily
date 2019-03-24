const keys = require('../../config/keys');

module.exports = survey => `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>I'd like your input!</h3>
          <p>Please answer the following question:</p>
          <p>${survey.body}</p>
          <div>
            <a href="${keys.domain}/api/surveys">Yes</a>
          </div>
          <div>
            <a href="${keys.domain}/api/surveys">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
