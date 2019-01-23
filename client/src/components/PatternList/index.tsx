import * as React from 'react';
import * as _ from 'lodash';
import Item from './Item/index';
import {compose, lifecycle, withState, withHandlers} from 'recompose';
import Button from 'Components/shared/Button/index';
import MarginBlock from 'Components/shared/MarginBlock/index';
import axios from 'axios';
import {PATH_TO_API} from 'Settings/index';
import {List, ListWrapper} from './styles';

const PatternList = (props: {
	patterns: Array<Object>,
}) =>
	<ListWrapper>
		<List>
			{
				!_.isEmpty(props.patterns)

					? props.patterns.map((pattern: any) => (
							<Item
								key={pattern._id}
								pattern={pattern}
							/>
						))

					: <span>Loading...</span>
			}
		</List>

		<MarginBlock
			top={12}
		>
			<Button
				text="Load more"
				hasBorder
				width={'full'}
			/>
		</MarginBlock>
	</ListWrapper>;

export default compose<any, any>(
	withState('patterns', 'setPatterns', []),

	withHandlers<any, any>({
		set: (props: any) => (patterns: Array<Object>) => props.setPatterns(patterns),
	}),

	lifecycle<any, any>({
		async componentDidMount() {
			const patterns = await axios.get(`${PATH_TO_API}/patterns`);
			return this.props.set(patterns.data.slice(0, 16));
		},
	}),
)(PatternList);
