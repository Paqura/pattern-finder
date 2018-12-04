import * as React from 'react';
import {Switch, Route} from 'react-router-dom';

import Main from './Main';

const Root = () => {
	return(
		<Switch>
			<Route component={Main} />
		</Switch>
	);
};

export default Root;
