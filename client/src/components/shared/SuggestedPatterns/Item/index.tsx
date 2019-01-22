import * as React from 'react';
import {TEMPORARY_PATTERNS_PATH} from 'Settings';
import MarginBlock from 'Components/shared/MarginBlock/index';
import {Link} from 'react-router-dom';
import {Item, LinkStyle} from './style';

const
	SuggestedPattern = (props: {
		patternID: string,
	}) =>
	<MarginBlock
		right={16}
	>
		<Item path={`${TEMPORARY_PATTERNS_PATH}${props.patternID}.svg`}>
			<Link to={`${props.patternID}`} style={LinkStyle} />
		</Item>
	</MarginBlock>;

export default SuggestedPattern;
