const Joi = require("@hapi/joi");

const searchSchema = Joi.object().keys({
  search: Joi.string().max(30).required(),
  size: Joi.number().max(10).required(),
});

const validationObj = {
  moviessearch: (req, res, next) => {
    const { error } = searchSchema.validate(req.query);
    if (error) {
      console.log(error.details);
      res.send(error.details);
    } else {
      next();
    }
  },
};

function getValidation(path) {
  const validatorFn = validationObj[path];
  const isValidationExist = typeof validatorFn === "function";
  return isValidationExist ? validatorFn : generalUnsafeCallback;
}

function generalUnsafeCallback(req, res, next) {
  console.log(`THIS API ENTRY IS NOT SAFE :${req.path}`);
  next();
}

module.exports = { getValidation };
