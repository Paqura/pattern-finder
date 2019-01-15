import * as React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import MarginBlock from 'Components/shared/MarginBlock/index';

export const
	Item = styled.li`
		background: #fafafa;
		padding: 7px 12px;
	`;

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
			<Link to={''}>
				{props.data.title}
			</Link>
		</Item>
	</MarginBlock>;

export default Tag;
