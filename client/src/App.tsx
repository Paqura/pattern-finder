import * as React from 'react';
import {Provider} from 'react-redux';
import {HashRouter as Router} from 'react-router-dom';
import store, {history} from '@/store';
import {ConnectedRouter} from 'react-router-redux';
import Root from '@/routes/Root';

const App = (props: {
	title?: string,
}) => {
	return(
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<Router>
					<Root />
				</Router>
			</ConnectedRouter>
		</Provider>
	)
};

export default App;