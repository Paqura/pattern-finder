import * as React from 'react';

const
	Header = (props: {
		scale: 1 | 2 | 3,
		title: string,
		style?: string,
	}) =>
		<>
			{props.scale === 1 && <h1>{props.title}</h1>}
			{props.scale === 2 && <h2>{props.title}</h2>}
			{props.scale === 3 && <h3>{props.title}</h3>}
		</>;

export default Header;