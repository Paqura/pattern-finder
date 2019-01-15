import * as React from 'react';
import Item from './Item/index';

import styled from 'styled-components';

export const
	List = styled.ul`
		list-style: none;
		display: flex;
		position: absolute;
		bottom: 20px;
		right: 30px;
	`;

const
	fakeData = [
		{id: '16'},
		{id: '2'},
		{id: '31'},
		{id: '41'},
	];

const
	SuggestedPatterns = (props: {

	}) =>
	<List>
		{fakeData.map(pattern => (
			<Item
				key={pattern.id}
				patternID={pattern.id}
			/>
		))}
	</List>;

export default SuggestedPatterns;