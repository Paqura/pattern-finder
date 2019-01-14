import * as React from 'react';
import {TEMPORARY_PATTERNS_PATH} from 'Settings';

const
	PatternFace = (props: {
		id: string,
	}) => <React.Fragment>
	<h3>Temporary title</h3>
	<img src={`${TEMPORARY_PATTERNS_PATH}${props.id}.svg`} alt={''} />
</React.Fragment>;

export default PatternFace;
