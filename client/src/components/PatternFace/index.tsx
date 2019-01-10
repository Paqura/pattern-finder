import * as React from 'react';

const
	PatternFace = (props: {
		data: {
			title: string,
			url: string,
		} | null,
	}) => props.data && <React.Fragment>
	<h3>{props.data.title}</h3>
	<img src={props.data.url} alt={props.data.title} />
</React.Fragment>;

export default PatternFace;
