import * as React from 'react';
import PatternFace from 'Components/PatternFace/index';

export default (props: {
		match: {
			params: {
				id: string,
			},
		},
	}) => <PatternFace id={props.match.params.id} />;

