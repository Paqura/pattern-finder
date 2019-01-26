import * as React from 'react';
import {LoadingComponent} from './style';

const
	Loading = (props: {
		show: boolean,
		type?: 'need' | 'create' | 'name',
	}) =>
		<LoadingComponent show={props.show}>
			Loading...
		</LoadingComponent>;

export default Loading;