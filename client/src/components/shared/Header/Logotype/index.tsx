import * as React from 'react';
import {Link} from 'react-router-dom';
import {Logo} from 'Components/shared/Vectors/index';

const Logotype = () => {
	return(
		<div>
			<Link to="/">
				<Logo
					width={40}
					height={40}
				/>
				<h1>patter finder</h1>
			</Link>
		</div>
	);
};

export default Logotype;
