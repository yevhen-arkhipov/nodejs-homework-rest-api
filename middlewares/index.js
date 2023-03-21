const validateAddBody = require('./validateAddBody');
const validateUpdateBody = require('./validateUpdateBody');
const validateUpdateFavorite = require('./validateUpdateFavorite');
const isValidId = require('./isValidId');
const validateAuthError = require('./validateAuthError');
const authenticate = require('./authenticate');
const validateUpdateSubscription = require('./validateUpdateSubscription');
const upload = require('./upload');
const jimpImageResizer = require('./jimpImageResizer');
const validateResendVerifyEmail = require('./validateResendVerifyEmail');

module.exports = {
  validateAddBody,
  validateUpdateBody,
  validateUpdateFavorite,
  isValidId,
  validateAuthError,
  authenticate,
  validateUpdateSubscription,
  upload,
  jimpImageResizer,
  validateResendVerifyEmail,
};
