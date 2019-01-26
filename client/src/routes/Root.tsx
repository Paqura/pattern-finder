import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar'
import Main from './Main';
import Details from './Details';
import Layout from 'Components/shared/Layout/index';

export const
	LoadingBarStyle = {
		backgroundColor: '#e6feff',
		height: '4px',
		zIndex: 100,
	};

const
	Root = () =>
		<Route
			render={({location}) => (
				<React.Fragment>
					<LoadingBar style={LoadingBarStyle} />
					<Layout>
						<Switch location={location}>
							<Route exact path="/" component={Main} />
							<Route exact path="/details/:id" component={Details} />
						</Switch>
					</Layout>
				</React.Fragment>
			)}
		/>;

export default Root;
