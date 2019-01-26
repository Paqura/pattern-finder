import * as React from 'react';
import PatternFace from 'Components/PatternFace/index';

const
	DetailsPage = (props: {
		match: {
			params: {
				id: string,
			},
		},
	}) =>
	<PatternFace
		id={props.match.params.id}
		isEditMode
	/>;

export default DetailsPage;
