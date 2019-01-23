import {DescriptionBlock, PatterStrip, PatternGrid, PatternSquare, PatternView} from './styles';
import {lifecycle, compose, withState, withHandlers} from 'recompose';
import * as React from 'react';
import {Header} from 'Components/shared/Typography/index';
import Container from 'Components/shared/Container/index';
import MarginBlock from 'Components/shared/MarginBlock/index';
import Tags from 'Components/shared/Tags/index';
import axios from 'axios';
import SuggestedPatterns from 'Components/shared/SuggestedPatterns/index';
import {PATH_TO_API} from 'Settings/index';

const
	PatternFace = (props: {
		id: string,

		pattern: {
			_id: string,
			imgPath: string,
			title: string,
		},
	}) =>
	<React.Fragment>
		<PatterStrip
			path={props.pattern.imgPath}
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
							src={props.pattern.imgPath}
							alt={props.pattern.title}
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
	</React.Fragment>;

export default compose<any, any>(
	withState('pattern', 'setPattern', {}),

	withHandlers<any, any>({
		set: (props: any) => (pattern: any) => props.setPattern(pattern),
	}),

	lifecycle<any, any>({
		async componentDidMount() {
			const pattern = await axios.get(`${PATH_TO_API}/patterns/${this.props.id}`);
			return this.props.set(pattern.data);
		},
	}),
)(PatternFace);
