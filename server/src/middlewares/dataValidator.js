const { check, validationResult } = require("express-validator");

const validateInput = (req, res, next) => {
  return [
    check("email")
      .notEmpty()
      .withMessage("email is required")
      .isEmail()
      .withMessage("invalid email address"),
    check("password")
      .notEmpty()
      .withMessage("password is required")
      .isLength({ min: 8 })
      .withMessage("password must be 8 characters"),
  ];
};

const checkValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.errors.length > 0) {
    return res.status(400).json({
      method: req.method,
      status: res.statusCode,
      error: errors.errors[0].msg,
    });
  }

  next();
};

module.exports = { validateInput, checkValidationErrors };
