import * as React from 'react';
import {AbsoluteStyle, Centered} from './style';

export default (props: {
	children: React.ReactNode,
	hasAbsolute?: boolean,
}) =>
	<Centered style={props.hasAbsolute && AbsoluteStyle}>
		{props.children}
	</Centered>;