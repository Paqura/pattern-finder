import {all} from 'redux-saga/effects';
import {saga as  patternsSaga} from 'Ducks/patterns/index';
import {saga as  detailsSaga} from 'Ducks/details/index';

export const saga = function * () {
	yield all([
		patternsSaga(),
		detailsSaga(),
	])
};