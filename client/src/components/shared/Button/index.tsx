import * as React from 'react';
import {Button} from './style';

const ButtonComponent = (props: {
	text: string,
	hasBorder?: boolean,
	marginLeft?: number,
	style?: Object,
}) => <Button
		hasBorder={props.hasBorder}
		marginLeft={props.marginLeft}
		style={props.style}
	>
		{props.text}
	</Button>;

export default ButtonComponent;
