const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../settings/keys');
const STATUS = require('../../settings/http-status');
const MESSAGES = require('../../settings/messages');
const errorHandler = require('../../utils/error-handler');

module.exports.register = async function(req, res) {
	const candidate = await User.findOne({ email: req.body.email });

	if(!candidate) {
		const salt = bcrypt.genSaltSync(10);
		const password = req.body.password;

		const newUser = new User({
			name: req.body.name,
			email: req.body.email,
			password: bcrypt.hashSync(password, salt),
		});

		try {
			await newUser.save();
			res.status(STATUS.CREATED).json(newUser);
		} catch(err) {
			errorHandler(res, err);
		}
	} else
		res.status(STATUS.CONFLICT).json({
			message: MESSAGES.AUTH.EMAIL_IS_EXIST,
		});
};

module.exports.login = async function(req, res) {
	const candidate = await User.findOne({email: req.body.email});

	if(!candidate) {
		res.status(STATUS.NOT_FOUND).json({
			message: MESSAGES.AUTH.EMAIL_NOT_FOUND,
		});
	} else {
		const resultPasswordMatch = bcrypt.compareSync(req.body.password, candidate.password);

		if(resultPasswordMatch) {
			const token = jwt.sign({
				name: candidate.name,
				email: candidate.email,
				avatar: candidate.avatar,
				userId: candidate._id,
			}, keys.jwt, {expiresIn: 60 * 60});

			res.status(STATUS.OK).json({
				token: `Bearer ${token}`,
			});
		} else {
			res.status(STATUS.UNAUTHORIZED).json({
				message: MESSAGES.AUTH.PASSWORD_IS_WRONG,
			})
		}
	}
};