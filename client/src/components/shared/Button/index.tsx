import * as React from 'react';
import {Button} from './style';

const ButtonComponent = (props: {
	width?: 'full' | 'auto',
	text: string,
	hasBorder?: boolean,
	style?: Object,
}) => <Button
		hasBorder={props.hasBorder}
		style={props.style}
		width={props.width}
	>
		{props.text}
	</Button>;

export default ButtonComponent;
