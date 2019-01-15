import * as React from 'react';
import {Link} from 'react-router-dom';
import {TEMPORARY_PATTERNS_PATH} from 'Settings';
import {PatternView, PatternSquare} from './styles';

const
	Item = (props: {
		id: number,
	}) => <Link to={`/details/${props.id}`}>
		<PatternSquare>
			<PatternView src={`${TEMPORARY_PATTERNS_PATH}${props.id}.svg`} />
		</PatternSquare>
	</Link>;

export default Item;
