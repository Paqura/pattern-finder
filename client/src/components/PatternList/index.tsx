import * as React from 'react';
import * as _ from 'lodash';
import Item from './Item/index';
import {compose, lifecycle, pure} from 'recompose';
import MarginBlock from 'Components/shared/MarginBlock/index';
import {getPatterns, getLazyPatterns, moduleName} from 'Ducks/patterns/index';
import {List, ListWrapper} from './styles';
import {connect} from 'react-redux';
import {Swish} from 'Components/shared/Loading/index';
import Centered from 'Components/shared/Centered/index';
import LoadMore from './LoadMore/index';

const PatternList = (props: {
	getLazyPatterns: () => void,
	patterns: [Object],
	loading: boolean,
	isLoaded: boolean,
}) =>
	<ListWrapper>
		<List>
			{!_.isEmpty(props.patterns)

				&& props.patterns.map((pattern: any) => (
						<Item
							key={pattern._id}
							pattern={pattern}
						/>
					))}
		</List>

		<MarginBlock top={props.loading ? 16 : 0} bottom={16}>
			<Centered>
				<Swish show={props.loading} />
			</Centered>
		</MarginBlock>

		{!props.isLoaded &&
				<LoadMore
					text="Load more"
					handler={props.getLazyPatterns}
					disabled={props.loading}
				/>}
	</ListWrapper>;

export default compose<any, any>(
	connect(
		(state: any) => ({
			error: state[moduleName].error,
			patterns: state[moduleName].patterns,
			loading: state[moduleName].loading,
			isLoaded: state[moduleName].isLoaded,
		}),

		{
			getPatterns,
			getLazyPatterns,
		},
	),

	lifecycle<any, any>({
		componentDidMount() {
			this.props.getPatterns();
		},
	}),

	pure,
)(PatternList);
