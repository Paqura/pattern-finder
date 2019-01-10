import * as React from 'react';
import Item from './Item/index';
import {compose, withState, lifecycle} from 'recompose';
import axios from 'axios';
import styled from 'styled-components';

const List = styled.ul`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 16px;
`;

const PatternList = (props: {
	patterns: Array<Object>,
}) => <List>
	{props.patterns.map((pattern: any) => (
		<Item 
			key={pattern.id} 
			pattern={pattern} 
		/>
	))}
</List>;

export default compose<any, any>(
	withState('patterns', 'setPatterns', []),

	lifecycle<any, any>({
		async componentDidMount() {
			const patterns = await axios.get('https://jsonplaceholder.typicode.com/photos');
			this.props.setPatterns(patterns.data.slice(0, 16));
		},
	}),
)(PatternList);
