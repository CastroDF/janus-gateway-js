var Helpers = require('./helpers');

/**
 * @param {JanusMessage} janusMessage
 * @constructor
 */
function JanusError(janusMessage) {
  this.name = this.constructor.name;
  this.janusMessage = janusMessage;
  var janusError = janusMessage.getError();
  this.message = janusError['reason'];
  this.code = janusError['code'];

  if (Error.captureStackTrace && typeof Error.captureStackTrace === 'function') {
    // Chrome and NodeJS
    Error.captureStackTrace(this, this.constructor);
  } else {
    // FF, IE 10+ and Safari 6+. Fallback for others
    this.stack = new Error().stack || '';
  }
}

Helpers.inherits(JanusError, Error);

module.exports = JanusError;
