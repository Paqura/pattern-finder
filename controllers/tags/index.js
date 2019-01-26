const Tag = require('../../models/Tag');
const keys = require('../../settings/keys');
const STATUS = require('../../settings/http-status');
const MESSAGES = require('../../settings/messages');
const errorHandler = require('../../utils/error-handler');

module.exports.tags = async function(req, res) {
	const tags = await Tag.find();

	if(!tags) {
		console.log('NOT_FOUND');
		return res.status(STATUS.NOT_FOUND).json({
			message: STATUS.NOT_FOUND,
		});
	}

	return res.status(STATUS.OK).json(tags);
};

module.exports.add = async function(req, res) {
	const candidate = new Tag({
		title: req.body.title,
	});

	await candidate.save();
	res.send('CREATED');
};
