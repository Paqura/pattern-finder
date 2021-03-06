import {DescriptionBlock, PatterStrip, PatternGrid, PatternSquare, PatternView} from './styles';
import {lifecycle, compose} from 'recompose';
import * as React from 'react';
import {Header} from 'Components/shared/Typography/index';
import Container from 'Components/shared/Container/index';
import Button from 'Components/shared/Button/index';
import MarginBlock from 'Components/shared/MarginBlock/index';
import Tags from 'Components/shared/Tags/index';
import {connect} from 'react-redux';
import SuggestedPatterns from 'Components/shared/SuggestedPatterns/index';
import {getPattern, moduleName} from 'Ducks/details/index';
import {Swish as SwishLoader} from 'Components/shared/Loading/index';
import Centered from 'Components/shared/Centered/index';

const
	PatternFace = (props: {
		id: string,

		pattern: {
			_id: string,
			imgPath: string,
			title: string,
		},

		isEditMode?: boolean,
		loading: boolean,
	}) =>
	<React.Fragment>
		{props.isEditMode &&	<Button	text="Edit"	hasBorder />}

			{!props.loading
				? <React.Fragment>
						<PatterStrip path={props.pattern.imgPath} />
						<Container>
							<PatternGrid>
								<MarginBlock top={-30} left={30} right={30}>
									<PatternSquare>
										<PatternView src={props.pattern.imgPath} alt={props.pattern.title} />
									</PatternSquare>
								</MarginBlock>

								<DescriptionBlock>
									<Header scale={1} title={props.pattern.title} />
									<Header scale={2} title={props.pattern.title} />
									<Tags />
								</DescriptionBlock>
							</PatternGrid>

							<SuggestedPatterns />
						</Container>
					</React.Fragment>

				: <Centered hasAbsolute>
						<SwishLoader show={props.loading} />
					</Centered>
			}
	</React.Fragment>;

export default compose<any, any>(
	connect(
		(state: any) => ({
			pattern: state[moduleName].pattern,
			error: state[moduleName].error,
			loading: state[moduleName].loading,
		}),

		{getPattern},
	),

	lifecycle<{getPattern: (id: string) => void, id: string}, null>({
		componentDidMount() {
			this.props.getPattern(this.props.id);
		},

		componentDidUpdate(prevProps) {
			if(prevProps.id !== this.props.id)
				this.props.getPattern(this.props.id);
		}
	}),
)(PatternFace);
