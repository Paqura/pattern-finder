import * as React from 'react';
import Item from './Item/index';
import {compose, lifecycle, pure} from 'recompose';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getSuggested, moduleName } from 'Ducks/suggested/index';

export const
	List = styled.ul`
		list-style: none;
		display: flex;
		position: absolute;
		bottom: 20px;
		right: 30px;
	`;

const
	SuggestedPatterns = (props: {
		suggested: Array<Object>,
		loading: boolean,
	}) =>
	<List>
		{props.suggested && props.suggested.map((pattern: any) => (
			<Item
				key={pattern._id}
				pattern={pattern}
			/>
		))}
	</List>;

export default compose<any, any>(
	connect(
		(state: any) => ({
			suggested: state[moduleName].suggested,
			loading:  state[moduleName].loading,
			error:  state[moduleName].error,
		}),

		{getSuggested: getSuggested},
	),

	lifecycle<any, any>({
		componentDidMount() {
			this.props.getSuggested();
		},
	}),
)(SuggestedPatterns);