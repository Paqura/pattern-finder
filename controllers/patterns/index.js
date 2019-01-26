const Pattern = require('../../models/Pattern');
const keys = require('../../settings/keys');
const STATUS = require('../../settings/http-status');
const MESSAGES = require('../../settings/messages');
const errorHandler = require('../../utils/error-handler');

module.exports.patterns = async function(req, res) {
	const patterns = await Pattern
		.find()
		.skip(+req.query.offset)
		.limit(+req.query.limit);

	if(!patterns)
		return res.status(STATUS.NOT_FOUND).json({
			status: STATUS.NOT_FOUND,
		});

	return res.status(STATUS.OK).json(patterns);
};

module.exports.details = async function(req, res) {
	const pattern = await Pattern.findById(req.params.id || req.body.id);

	if(!pattern) {
		return res.status(STATUS.NOT_FOUND).json({
			status: STATUS.NOT_FOUND,
		});
	}

	return res.status(STATUS.OK).json(pattern);
}

module.exports.add = async function(req, res) {
	const candidate = new Pattern({
		title: req.body.title,
		imgPath: req.body.imgPath,
	});

	await candidate.save();
	res.send('CREATED');
};

module.exports.update = async function(req, res) {
	try {
		const ID = req.params.id || req.body.id;
		const candidate = await Pattern.findById(ID);

		await candidate.updateOne({
			title: req.body.title,
			imgPath: req.body.imgPath,
			tags: req.body.tags,
		});

		res.status(STATUS.OK).json({
			status: STATUS.OK,
		});
	} catch (error) {
		return res.status(STATUS.NOT_FOUND).json({
			status: STATUS.NOT_FOUND,
		});
	}
};
