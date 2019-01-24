import {combineReducers} from 'redux';
import {reducer as authReducers} from 'Ducks/auth/index';
import {reducer as patternsReducers} from 'Ducks/patterns/index';

export default combineReducers({
	auth: authReducers,
	patterns: patternsReducers,
});
