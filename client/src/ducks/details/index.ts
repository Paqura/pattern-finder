import {all, call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {PATH_TO_API} from 'Settings/index';
import {showLoading, hideLoading} from 'react-redux-loading-bar';
import {TAction} from 'Typedefs/IAction';

export const moduleName = 'details';

export const ACTION_TYPES = {
	GET_PATTERN_REQUEST: 'GET_PATTERN_REQUEST',
	GET_PATTERN_SUCCESS: 'GET_PATTERN_SUCCESS',
	GET_PATTERN_FAILURE: 'GET_PATTERN_FAILURE',
};

export const getPattern = (id: string) => ({
	type: ACTION_TYPES.GET_PATTERN_REQUEST,
	payload: {id},
});

export const getPatternSaga = function* (action: TAction): any {
	try {
		yield put(showLoading());
		const pattern = yield call(axios.get, `${PATH_TO_API}/patterns/${action.payload.id}`);

		yield put({
			type: ACTION_TYPES.GET_PATTERN_SUCCESS,
			payload: pattern.data,
		});
	} catch (error) {
		yield put({
			type: ACTION_TYPES.GET_PATTERN_FAILURE,
			payload: error.message,
		});
	} finally {
		yield put(hideLoading());
	}
};

export const saga = function* (): any {
	yield all([
		takeEvery(ACTION_TYPES.GET_PATTERN_REQUEST, getPatternSaga),
	]);
};

const initialState = {
	pattern: {},
	error: null,
	loading: false,
};

export const reducer = (state: any = initialState, action: any) => {
	const {type, payload} = action;
	switch(type) {
		case ACTION_TYPES.GET_PATTERN_REQUEST:
			return {
				...state,
				loading: true,
			};

		case ACTION_TYPES.GET_PATTERN_SUCCESS:
			return {
				...state,
				pattern: payload,
				error: null,
				loading: false,
			};

		case ACTION_TYPES.GET_PATTERN_FAILURE:
			return {
				...state,
				error: payload,
				loading: false,
			}

		default: return state;
	}
};