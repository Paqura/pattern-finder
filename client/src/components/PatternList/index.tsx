import * as React from 'react';
import * as _ from 'lodash';
import Item from './Item/index';

import {List} from './styles';

const PatternList = () => <List>
	{_.range(1, 17).map((fakeKey: number) => (
		<Item
			key={fakeKey}
			id={fakeKey}
		/>
	))}
</List>;

export default PatternList;
