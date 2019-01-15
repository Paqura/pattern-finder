import * as React from 'react';
import {Button} from './style';

const ButtonComponent = (props: {
	width?: 'full' | 'auto',
	text: string,
	hasBorder?: boolean,
	marginLeft?: number,
	style?: Object,
}) => <Button
		hasBorder={props.hasBorder}
		marginLeft={props.marginLeft}
		style={props.style}
		width={props.width}
	>
		{props.text}
	</Button>;

export default ButtonComponent;
