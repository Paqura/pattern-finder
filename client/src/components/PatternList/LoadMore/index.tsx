import * as React from 'react';
import {LoadMoreButton} from './style';

export default (props: {
	text: string,
	handler: Function,
	disabled: boolean,
	}) =>
	<LoadMoreButton
		disabled={props.disabled}
		onClick={() => props.handler()}
	>
		{props.text}
	</LoadMoreButton>;