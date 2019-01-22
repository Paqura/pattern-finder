const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patternSchema = new Schema({
	title: {
		type: String,
		required: true,
	},

	imgPath: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('patterns', patternSchema);