const { HttpError } = require('../helpers');

const validateUpdateSubscription = schema => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, 'missing field subscription'));
    }
    next();
  };
  return func;
};

module.exports = validateUpdateSubscription;
