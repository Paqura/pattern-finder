const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagSchema = new Schema({
	title: {
		type: String,
		required: true,
	},

	related: [
		{
			type: Schema.Types.ObjectId,
			ref: 'patterns',
		}
	],
});

module.exports = mongoose.model('tags', tagSchema);