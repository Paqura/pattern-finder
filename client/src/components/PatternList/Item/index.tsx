import * as React from 'react';
import {Link} from 'react-router-dom';
import {TEMPORARY_PATTERNS_PATH} from 'Settings';

import {Pic} from './styles';

const
	Item = (props: {
		id: number,
	}) => <Link to={`/details/${props.id}`}>
		<div>
			<Pic src={`${TEMPORARY_PATTERNS_PATH}${props.id}.svg`} />
		</div>
	</Link>;

export default Item;
