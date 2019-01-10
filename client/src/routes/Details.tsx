import * as React from 'react';
import Layout from 'Components/shared/Layout/index';
import {compose, lifecycle, withState} from 'recompose';
import axios from 'axios';

const PatternFace = React.lazy(() => import('Components/PatternFace/index'));

const
	DetailsPage = (props: {
		data: {
			id: string,
			title: string,
			url: string,
		},

		match: {
			params: {
				id: string,
			},
		},
	}) => {
		return(
			<Layout>
				<React.Suspense fallback={<span>Loading...</span>}>
					<PatternFace data={props.data} />
				</React.Suspense>
			</Layout>
		);
	};

export default compose<any, any>(
	withState('data', 'setData', null),

	lifecycle<any, any>({
		async componentDidMount() {
			const pattern = await axios.get(
				`https://jsonplaceholder.typicode.com/photos/${this.props.match.params.id}`,
			);

			setTimeout(() => this.props.setData(pattern.data), 1200);
		},
	}),
)(DetailsPage);
