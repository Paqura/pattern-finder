import * as React from 'react';
import * as _ from 'lodash';
import Item from './Item/index';
import Button from 'Components/shared/Button/index';
import MarginBlock from 'Components/shared/MarginBlock/index';

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

export default PatternList;
