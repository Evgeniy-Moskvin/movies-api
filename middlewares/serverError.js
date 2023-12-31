const { STATUS_CODE_INTERNAL_SERVER_ERROR } = require('../utils/httpStatusCodes');
const { ERROR_MESSAGE_SERVER_ERROR } = require('../utils/errorMessages');

const serverError = (err, req, res, next) => {
  if (err.statusCode) {
    res.status(err.statusCode).send({ message: err.message });
  } else {
    res.status(STATUS_CODE_INTERNAL_SERVER_ERROR).send({ message: ERROR_MESSAGE_SERVER_ERROR });
  }

  next();
};

module.exports = {
  serverError,
};
