import * as React from 'react';
import {Switch, Route} from 'react-router-dom';

import Main from './Main';
import Details from './Details';

const Root = () => {
	return(
		<Switch>
			<Route exact path="/" component={Main} />
			<Route exact path="/details/:id" component={Details} />
		</Switch>
	);
};

export default Root;
