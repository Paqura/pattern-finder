import * as React from 'react';
import {compose, withState, lifecycle} from 'recompose';
import axios from 'axios';
import styled from 'styled-components';

const Patterns = styled.ul`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 16px;
`;

const Pic = styled.img`
	max-width: 100%;
	height: auto;
`;

const PatternList = (props: {
	patterns: any,
}) => <Patterns>
	{props.patterns.map((pattern: any) => (
		<div key={pattern.id}>
			<Pic src={pattern.url} />
		</div>
	))}
</Patterns>;

export default compose<any, any>(
	withState('patterns', 'setPatterns', []),
	lifecycle<any, any>({
		async componentDidMount() {
			const patterns = await axios.get('https://jsonplaceholder.typicode.com/photos');
			this.props.setPatterns(patterns.data.slice(0, 16));
		},
	}),
)(PatternList);
