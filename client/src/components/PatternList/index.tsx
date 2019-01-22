import * as React from 'react';
import * as _ from 'lodash';
import Item from './Item/index';
import {compose, lifecycle} from 'recompose';
import Button from 'Components/shared/Button/index';
import MarginBlock from 'Components/shared/MarginBlock/index';
import axios from 'axios';
import {List, ListWrapper} from './styles';

const PatternList = () =>
	<ListWrapper>
		<List>
			{_.range(1, 17).map((fakeKey: number) => (
				<Item
					key={fakeKey}
					id={fakeKey}
				/>
			))}
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

export default compose(
	lifecycle({
		async componentDidMount() {
			const patterns = await axios.get('/api/patterns');
			console.log(patterns);
		},
	}),
)(PatternList);
