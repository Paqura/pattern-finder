import * as React from 'react';
import * as _ from 'lodash';
import Item from './Item/index';
import {compose, lifecycle, withState, withHandlers} from 'recompose';
import Button from 'Components/shared/Button/index';
import MarginBlock from 'Components/shared/MarginBlock/index';
import {getPatterns, moduleName} from 'Ducks/patterns/index';
import {List, ListWrapper} from './styles';
import {connect} from 'react-redux';

const PatternList = (props: {
	patterns: Array<Object>,
}) =>
	<ListWrapper>
		<List>
			{!_.isEmpty(props.patterns)

					? props.patterns.map((pattern: any) => (
							<Item
								key={pattern._id}
								pattern={pattern}
							/>
						))

					: <span>Loading...</span>}
		</List>

		<MarginBlock
			top={12}
		>
			<Button
				text="Load more"
				hasBorder
				width="full"
			/>
		</MarginBlock>
	</ListWrapper>;

export default compose<any, any>(
	connect(
		(state: any) => ({
			error: state[moduleName].error,
			patterns: state[moduleName].patterns,
			loading: state[moduleName].loading,
		}),

		{getPatterns: getPatterns}
	),

	lifecycle<any, any>({
		async componentDidMount() {
			this.props.getPatterns();
		},
	}),
)(PatternList);
