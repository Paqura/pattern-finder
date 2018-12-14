import * as React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import store, {history} from 'Store/index';
import {ConnectedRouter} from 'react-router-redux';
import Root from './routes/Root';

import theme from './theme/index';

const App = () => {
	return(
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<Router>
						<Root />
					</Router>
				</ConnectedRouter>
			</Provider>
		</ThemeProvider>
	);
};

export default App;
