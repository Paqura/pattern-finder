import {combineReducers} from 'redux';
import {reducer as authReducers} from '../ducks/auth';

export default combineReducers({
	auth: authReducers,
});
