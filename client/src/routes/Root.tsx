import * as React from 'react';
import {Switch, Route} from 'react-router-dom';

import Main from './Main';
import Details from './Details';
import Layout from 'Components/shared/Layout/index';

const
	Root = () =>
		<Route
			render={({location}) => (
				<Layout>
					<Switch location={location}>
						<Route exact path="/" component={Main} />
						<Route exact path="/details/:id" component={Details} />
					</Switch>
				</Layout>
			)}
		/>;

export default Root;
