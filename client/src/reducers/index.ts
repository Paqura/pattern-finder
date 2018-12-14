import {combineReducers} from 'redux';
import {reducer as authReducers} from 'Ducks/auth/index';

export default combineReducers({
	auth: authReducers,
});
