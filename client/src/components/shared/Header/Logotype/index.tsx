import * as React from 'react';
import {Link} from 'react-router-dom';
const content = require('./logotype.svg');
import Icon from '../../Icon';

const Logotype = () => {
	return(
		<Link to="/">
			<Icon
				imagePath={content}
				alt={'Empty'}
			/>
			<h1>patter finder</h1>
		</Link>
	);
};

export default Logotype;
