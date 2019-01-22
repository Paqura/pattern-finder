const Pattern = require('../models/Pattern');
const keys = require('../settings/keys');
const STATUS = require('../settings/http-status');
const MESSAGES = require('../settings/messages');
const errorHandler = require('../utils/error-handler');

module.exports.patterns = async function(req, res) {
	const patterns = await Pattern.find();

	if(!patterns)
		return console.log('NOT_FOUND');

	return res.status(STATUS.OK).json(patterns);
};

module.exports.add = async function(req, res) {
	const candidate = new Pattern({
		title: req.body.title,
		imgPath: req.body.imgPath,
	});

	await candidate.save();
	res.send('CREATED');
}
