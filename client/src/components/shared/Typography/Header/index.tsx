import * as React from 'react';

const
	Header = (props: {
		headerScale: 1 | 2 | 3,
		title: string,
	}) =>
		<>
			{props.headerScale === 1 && <h1>{props.title}</h1>}
			{props.headerScale === 2 && <h2>{props.title}</h2>}
			{props.headerScale === 3 && <h3>{props.title}</h3>}
		</>;

export default Header;