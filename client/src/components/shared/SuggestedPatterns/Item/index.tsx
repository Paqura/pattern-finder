import * as React from 'react';
import {TEMPORARY_PATTERNS_PATH} from 'Settings';
import styled from 'styled-components';
import MarginBlock from 'Components/shared/MarginBlock/index';
import { Link } from 'react-router-dom';

export const
	Item: any = styled.li`
		background-image: url('${(props: {path: string}) => props.path}');
		width: 70px;
		height: 70px;
		background-size: 100%;
		position: relative;
		transition: 200ms transform cubic-bezier(0.25, 0.46, 0.45, 0.94);

		&:hover {
			transform: scale(1.02) translateY(-8px);
		}
	`,

	LinkStyle = {
		width: '100%',
		height: '100%',
		position: 'absolute',
		boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.03), 8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03)',
	};

const
	SuggestedPattern = (props: {
		patternID: string,
	}) =>
	<MarginBlock
		right={16}
	>
		<Item path={`${TEMPORARY_PATTERNS_PATH}${props.patternID}.svg`}>
			<Link to={''} style={LinkStyle} />
		</Item>
	</MarginBlock>;

export default SuggestedPattern;
