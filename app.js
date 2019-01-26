const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const compression = require('compression');
const keys = require('./settings/keys');

mongoose.connect(keys.MONGO_URI, { useNewUrlParser: true})
	.then(() => console.log('Database connected'))
	.catch(err => console.log(err))

mongoose.set('useCreateIndex', true);

const authRoute = require('./routes/api/auth');
const patternRoute = require('./routes/api/patterns');
const tagRoute = require('./routes/api/tags');
const suggestedRoute= require('./routes/api/suggested');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/auth', authRoute);
app.use('/api/patterns', patternRoute);
app.use('/api/tags', tagRoute);
app.use('/api/suggested', suggestedRoute);
app.use(compression());

if(process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(
			path.resolve(
				__dirname, 'client', 'build', 'index.html',
			),
		);
	});
};

module.exports = app;