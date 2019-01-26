import * as React from 'react';
import MarginBlock from 'Components/shared/MarginBlock/index';
import {Link} from 'react-router-dom';
import {Item, LinkStyle} from './style';

const
	SuggestedPattern = (props: {
		pattern: {
			_id: string,
			imgPath: string,
		},
	}) =>
	<MarginBlock
		right={16}
	>
		<Item path={props.pattern.imgPath}>
			<Link to={`${props.pattern._id}`} style={LinkStyle} />
		</Item>
	</MarginBlock>;

export default SuggestedPattern;
