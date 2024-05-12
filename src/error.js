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
    Error.captureStackTrace(this, this.constructor);
  }
}

Helpers.inherits(JanusError, Error);

module.exports = JanusError;
