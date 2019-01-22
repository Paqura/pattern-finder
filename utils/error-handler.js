const STATUS = require('../settings/http-status');

module.exports = (res, error) => {
	res.status(STATUS.INTERNAL_SERVER_ERROR).json({
		success: false,
		message: error.message ? error.message : error,
	})
};