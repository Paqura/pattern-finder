import * as React from 'react';
import Button from 'Components/shared/Button/index';

const SubmitButtonStyle = {
	marginLeft: '20px',
	color: '#111111',
	borderColor: '#999999',
};

const Controls = (props: {

}) => <div>
	<Button text="Explore" />
	<Button
		text="Submit"
		hasBorder
		style={SubmitButtonStyle}
	/>
</div>;

export default Controls;
