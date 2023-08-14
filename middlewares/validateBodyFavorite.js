const { HttpError } = require("../helpers");

const validateFavorite = (schema) => {
  const foo = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };
  return foo;
};

module.exports = validateFavorite;
