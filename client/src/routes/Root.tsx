import * as React from 'react';
import {Switch, Route} from 'react-router-dom';

const indexRoute = () => <div>Main page</div>;

const Root = () => {
	return(
		<Switch>
			<Route  component={indexRoute} />
		</Switch>
	)
};

export default Root;