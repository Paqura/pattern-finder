import {all, call, put, select, takeEvery} from 'redux-saga/effects';
import * as _ from 'lodash';
import {showLoading, hideLoading} from 'react-redux-loading-bar';
import axios from 'axios';
import {PATH_TO_API} from 'Settings/index';
import {TAction} from 'Typedefs/IAction';

export const moduleName = 'patterns';

export const ACTION_TYPES = {
	GET_PATTERNS_REQUEST: 'GET_PATTERNS_REQUEST',
	GET_PATTERNS_SUCCESS: 'GET_PATTERNS_SUCCESS',
	GET_PATTERNS_FAILURE: 'GET_PATTERNS_FAILURE',

	GET_LAZY_PATTERNS_REQUEST: 'GET_LAZY_PATTERNS_REQUEST',
	GET_LAZY_PATTERNS_SUCCESS: 'GET_LAZY_PATTERNS_SUCCESS',
	GET_LAZY_PATTERNS_FAILURE: 'GET_LAZY_PATTERNS_FAILURE',
};

export const getPatterns = () => ({
	type: ACTION_TYPES.GET_PATTERNS_REQUEST,
});

export const getLazyPatterns = () => ({
	type: ACTION_TYPES.GET_LAZY_PATTERNS_REQUEST,
});

export const getPatternsSaga = function* (action: TAction): any {
	try {
		yield put(showLoading());
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
	} finally {
		yield put(hideLoading());
	}
};

export const getLazyPatternsSaga = function* (action: TAction): any {
	const state = yield select();
	const {offset, limit} = state[moduleName];
	const newOffset = offset + limit;

	try {
		yield put(showLoading());
		const patterns = yield call(axios.get, `${PATH_TO_API}/patterns?offset=${newOffset}&limit=${limit}`);

		yield put({
			type: ACTION_TYPES.GET_LAZY_PATTERNS_SUCCESS,
			payload: patterns.data,
		});
	} catch (error) {
		yield put({
			type: ACTION_TYPES.GET_LAZY_PATTERNS_FAILURE,
			payload: error.message,
		});
	} finally {
		yield put(hideLoading());
	}
};

export const saga = function* (): any {
	yield all([
		takeEvery(ACTION_TYPES.GET_PATTERNS_REQUEST, getPatternsSaga),
		takeEvery(ACTION_TYPES.GET_LAZY_PATTERNS_REQUEST, getLazyPatternsSaga),
	]);
};

const initialState = {
	offset: 0,
	limit: 16,
	patterns: [],
	error: null,
	loading: false,
};

export const reducer = (state: any = initialState, action: any) => {
	const {type, payload} = action;
	switch(type) {
		case ACTION_TYPES.GET_PATTERNS_REQUEST:
		case ACTION_TYPES.GET_LAZY_PATTERNS_REQUEST:
			return {
				...state,
				loading: true,
			};

		case ACTION_TYPES.GET_PATTERNS_SUCCESS:
		case ACTION_TYPES.GET_LAZY_PATTERNS_SUCCESS:
			return {
				...state,

				patterns: _.uniqBy([
					...state.patterns,
					...payload,
				], '_id'),

				error: null,
				loading: false,
			};

		case ACTION_TYPES.GET_PATTERNS_FAILURE:
		case ACTION_TYPES.GET_LAZY_PATTERNS_FAILURE:
			return {
				...state,
				error: payload,
				loading: false,
			}

		default: return state;
	}
};