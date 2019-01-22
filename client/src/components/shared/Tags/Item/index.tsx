import * as React from 'react';
import {Link} from 'react-router-dom';
import MarginBlock from 'Components/shared/MarginBlock/index';
import {Item, LinkStyle} from './style';

const
	Tag = (props: {
		data: {
			id: string,
			title: string,
		},
	}) =>
	<MarginBlock
		right={10}
	>
		<Item>
			<Link to={''} style={LinkStyle}>
				{props.data.title}
			</Link>
		</Item>
	</MarginBlock>;

export default Tag;
