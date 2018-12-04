import {IAction} from 'Typedefs/IAction';

const initialState = {};

export const reducer = (state = initialState, action: IAction) => {
	const {type, payload} = action;

	switch(type) {
	default: return state;
	}
};
