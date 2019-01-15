import * as React from 'react';
import Tag from './Item/index';

import styled from 'styled-components';

export const
	List = styled.ul`
		list-style: none;
		display: flex;
		margin: 0;
		margin-top: 20px;
		padding: 0;
	`;

const
	fakeTags = [
		{id: '1', title: 'geometric'},
		{id: '2', title: 'dense'},
		{id: '3', title: 'abstract'},
		{id: '4', title: 'other'},
	];

const
	Tags = (props: {

	}) =>
	<List>
		{fakeTags.map(tag => (
			<Tag
				key={tag.id}
				data={tag}
			/>
		))}
	</List>;

export default Tags;