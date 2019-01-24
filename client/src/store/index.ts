import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware  from 'redux-saga';
import rootReducer from 'Reducers/index';
import createBrowserHistory from 'history/createBrowserHistory';
import logger from 'redux-logger';
import {saga as rootSaga} from 'Sagas/index';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const enhancer = () => {
	if (process.env.NODE_ENV === 'production')
		return applyMiddleware(sagaMiddleware);

	return applyMiddleware(sagaMiddleware, logger);
};

const store = createStore(rootReducer, enhancer());
sagaMiddleware.run(rootSaga);

export default store;
