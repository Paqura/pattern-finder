import {applyMiddleware, createStore} from 'redux';
import rootReducer from '@/reducers';
import createBrowserHistory from 'history/createBrowserHistory';
import logger from 'redux-logger';

export const history = createBrowserHistory();

const enhancer = () => {
	if (process.env.NODE_ENV === 'production') {
		return applyMiddleware();
	} else {
		return applyMiddleware(logger);
	}
};

const store = createStore(rootReducer);
export default store;