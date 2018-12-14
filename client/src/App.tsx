import * as React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import store, {history} from 'Store/index';
import {ConnectedRouter} from 'react-router-redux';
import Root from './routes/Root';

const App = () => {
	return(
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<Router>
					<Root />
				</Router>
			</ConnectedRouter>
		</Provider>
	);
};

export default App;
