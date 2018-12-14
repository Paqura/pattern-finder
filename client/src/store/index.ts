import {applyMiddleware, createStore} from 'redux';
import rootReducer from 'Reducers/index';
import createBrowserHistory from 'history/createBrowserHistory';
import logger from 'redux-logger';

export const history = createBrowserHistory();

const enhancer = () => {
	if (process.env.NODE_ENV === 'production')
		return applyMiddleware();

	return applyMiddleware(logger);
};

const store = createStore(rootReducer);
export default store;
