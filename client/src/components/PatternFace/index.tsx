import * as React from 'react';
import {Header} from 'Components/shared/Typography/index';
import Container from 'Components/shared/Container/index';
import MarginBlock from 'Components/shared/MarginBlock/index';
import Tags from 'Components/shared/Tags/index';
import axios from 'axios';
import SuggestedPatterns from 'Components/shared/SuggestedPatterns/index';
import {PATH_TO_API} from 'Settings/index';
import {DescriptionBlock, PatterStrip, PatternGrid, PatternSquare, PatternView} from './styles';
import { lifecycle, compose } from 'recompose';
import { any } from 'prop-types';

const
	PatternFace = (props: {
		id: string,
	}) =>
	<>
		<PatterStrip
			path={``}
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
							src={``}
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

export default compose<any, any>(
	lifecycle<any, any>({
		async componentDidMount() {
			const pattern = await axios.get(`${PATH_TO_API}/patterns/${this.props.id}`);
			console.log(pattern)
		},
	}),
)(PatternFace);
