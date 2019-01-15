import * as React from 'react';
import {Header} from 'Components/shared/Typography/index';
import Container from 'Components/shared/Container/index';
import MarginBlock from 'Components/shared/MarginBlock/index';
import Tags from 'Components/shared/Tags/index';
import SuggestedPatterns from 'Components/shared/SuggestedPatterns/index';
import {TEMPORARY_PATTERNS_PATH} from 'Settings';
import {DescriptionBlock, PatterStrip, PatternGrid, PatternSquare, PatternView} from './styles';

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
					right={30}
				>
					<PatternSquare>
						<PatternView
							src={`${TEMPORARY_PATTERNS_PATH}${props.id}.svg`}
							alt={''}
						/>
					</PatternSquare>
				</MarginBlock>

				<DescriptionBlock>
					<Header
						scale={1}
						title="Temporary title"
					/>

					<Header
						scale={2}
						title="Temporary title"
					/>

					<Tags />
				</DescriptionBlock>
			</PatternGrid>

			<SuggestedPatterns />
		</Container>
	</>;

export default PatternFace;
