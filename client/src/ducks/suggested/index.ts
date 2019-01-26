import {all, call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {PATH_TO_API} from 'Settings/index';
import {showLoading, hideLoading} from 'react-redux-loading-bar';

export const moduleName = 'suggested';

export const ACTION_TYPES = {
	GET_SUGGESTED_REQUEST: 'GET_SUGGESTED_REQUEST',
	GET_SUGGESTED_SUCCESS: 'GET_SUGGESTED_SUCCESS',
	GET_SUGGESTED_FAILURE: 'GET_SUGGESTED_FAILURE',
};

export const getSuggested = () => ({
	type: ACTION_TYPES.GET_SUGGESTED_REQUEST,
});

export const getSuggestedSaga = function* (): any {
	try {
		yield put(showLoading());
		const SUGGESTED = yield call(axios.get, `${PATH_TO_API}/suggested`);

		yield put({
			type: ACTION_TYPES.GET_SUGGESTED_SUCCESS,
			payload: SUGGESTED.data,
		});
	} catch (error) {
		yield put({
			type: ACTION_TYPES.GET_SUGGESTED_FAILURE,
			payload: error.message,
		});
	} finally {
		yield put(hideLoading());
	}
};

export const saga = function* (): any {
	yield all([
		takeEvery(ACTION_TYPES.GET_SUGGESTED_REQUEST, getSuggestedSaga),
	]);
};

const initialState = {
	suggested: [],
	error: null,
	loading: false,
};

export const reducer = (state: any = initialState, action: any) => {
	const {type, payload} = action;
	switch(type) {
		case ACTION_TYPES.GET_SUGGESTED_REQUEST:
			return {
				...state,
				loading: true,
			};

		case ACTION_TYPES.GET_SUGGESTED_SUCCESS:
			return {
				...state,
				suggested: payload,
				error: null,
				loading: false,
			};

		case ACTION_TYPES.GET_SUGGESTED_FAILURE:
			return {
				...state,
				error: payload,
				loading: false,
			}

		default: return state;
	}
};