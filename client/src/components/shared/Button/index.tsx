import * as React from 'react';
import {Button} from './style';

const ButtonComponent = (props: {
	width?: 'full' | 'auto',
	text: string,
	hasBorder?: boolean,
	style?: Object,
	handler?: Function,
}) => <Button
		hasBorder={props.hasBorder}
		style={props.style}
		width={props.width}
		onClick={props.handler}
	>
		{props.text}
	</Button>;

export default ButtonComponent;
