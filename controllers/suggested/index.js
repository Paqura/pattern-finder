const Pattern = require('../../models/Pattern');
const STATUS = require('../../settings/http-status');
const MESSAGES = require('../../settings/messages');
const errorHandler = require('../../utils/error-handler');

module.exports.suggested = async function(req, res) {
	const patterns = await Pattern.find().limit(4);

	await Pattern
		.estimatedDocumentCount()
		.then(count => {
			res.status(STATUS.OK).json(patterns)
		})
		.catch(err => {
			console.log(err);
		});

	if(!patterns)
		return res.status(STATUS.NOT_FOUND).json({
			status: STATUS.NOT_FOUND,
		});
};
