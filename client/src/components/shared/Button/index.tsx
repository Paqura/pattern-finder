import * as React from 'react';
import {Button} from './style';

const ButtonComponent = (props: {
	width?: 'full' | 'auto',
	text: string,
	hasBorder?: boolean,
	hasShadow?: boolean,
	style?: Object,
	handler?: Function,
	disabled?: boolean,
}) => <Button
		hasBorder={props.hasBorder}
		hasShadow={props.hasShadow}
		style={props.style}
		width={props.width}
		onClick={props.handler}
		disabled={props.disabled}
	>
		{props.text}
	</Button>;

export default ButtonComponent;
