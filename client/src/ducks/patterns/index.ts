import {all, call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {PATH_TO_API} from 'Settings/index';

export const moduleName = 'patterns';

export const ACTION_TYPES = {
	GET_PATTERNS_REQUEST: 'GET_PATTERNS_REQUEST',
	GET_PATTERNS_SUCCESS: 'GET_PATTERNS_SUCCESS',
	GET_PATTERNS_FAILURE: 'GET_PATTERNS_FAILURE',
};

export const getPatterns = () => ({
	type: ACTION_TYPES.GET_PATTERNS_REQUEST,
});

export const getPatternsSaga = function* (action: any): any {
	try {
		const patterns = yield call(axios.get, `${PATH_TO_API}/patterns`);

		yield put({
			type: ACTION_TYPES.GET_PATTERNS_SUCCESS,
			payload: patterns.data,
		});
	} catch (error) {
		yield put({
			type: ACTION_TYPES.GET_PATTERNS_FAILURE,
			payload: error.message,
		});
	}
};

export const saga = function* (): any {
	yield all([
		takeEvery(ACTION_TYPES.GET_PATTERNS_REQUEST, getPatternsSaga),
	]);
};

const initialState = {
	patterns: [],
	error: null,
	loading: false,
};

export const reducer = (state: any = initialState, action: any) => {
	const {type, payload} = action;
	switch(type) {
		case ACTION_TYPES.GET_PATTERNS_REQUEST:
			return {
				...state,
				loading: true,
			};

		case ACTION_TYPES.GET_PATTERNS_SUCCESS:
			return {
				...state,
				patterns: payload,
				error: null,
				loading: false,
			};

		case ACTION_TYPES.GET_PATTERNS_FAILURE:
			return {
				...state,
				error: payload,
				loading: false,
			}

		default: return state;
	}
};