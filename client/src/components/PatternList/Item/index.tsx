import * as React from 'react';
import {Link} from 'react-router-dom';
import {PatternView, PatternSquare} from './styles';

const
	Item = (props: {
		key: number,

		pattern: {
			_id: string,
			title: string,
			imgPath: string,
		},
	}) =>
	<li>
		<Link to={`/details/${props.pattern._id}`}>
			<PatternSquare>
				<PatternView src={props.pattern.imgPath} />
			</PatternSquare>
		</Link>
	</li>;

export default Item;
