import * as React from 'react';
import {Header} from 'Components/shared/Typography/index';
import Container from 'Components/shared/Container/index';
import MarginBlock from 'Components/shared/MarginBlock/index';
import {TEMPORARY_PATTERNS_PATH} from 'Settings';
import {PatterStrip, PatternGrid, PatternSquare} from './styles';

const
	PatternFace = (props: {
		id: string,
	}) =>
	<>
		<PatterStrip
			path={`${TEMPORARY_PATTERNS_PATH}${props.id}.svg`}
		/>
		<Container>
			<PatternGrid>
				<MarginBlock
					top={-30}
					left={30}
				>
					<PatternSquare>
						<img src={`${TEMPORARY_PATTERNS_PATH}${props.id}.svg`} alt={''} />
					</PatternSquare>
				</MarginBlock>
				<Header
					headerScale={1}
					title="Temporary title"
				/>
			</PatternGrid>
		</Container>
	</>;

export default PatternFace;
