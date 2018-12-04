import {TAction} from 'Typedefs/IAction';

const initialState = {};

export const reducer = (state = initialState, action: TAction) => {
	const {type, payload} = action;
	switch(type) {
	default: return state;
	}
};
