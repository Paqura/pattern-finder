import {combineReducers} from 'redux';
import {loadingBarReducer} from 'react-redux-loading-bar';
import {reducer as authReducers} from 'Ducks/auth/index';
import {reducer as patternsReducers} from 'Ducks/patterns/index';
import {reducer as detailsReducers} from 'Ducks/details/index';
import {reducer as suggestedReducers} from 'Ducks/suggested/index';

export default combineReducers({
	loadingBar: loadingBarReducer,
	auth: authReducers,
	patterns: patternsReducers,
	details: detailsReducers,
	suggested: suggestedReducers,
});
