import * as React from 'react';
import {SwishSpinner} from 'react-spinners-kit';

const
	Swish = (props: {
		show: boolean,
	}) =>
	<SwishSpinner
		size={30}
		color="#e6feff"
		loading={props.show}
	/>;

export default Swish;
