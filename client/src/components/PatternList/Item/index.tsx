import * as React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Pic = styled.img`
	max-width: 100%;
	height: auto;
`;

const
	Item = (props: {
		pattern: {
			id: string,
			url: string,
		},
	}) => <Link to={`/details/${props.pattern.id}`}>
		<div key={props.pattern.id}>
			<Pic src={props.pattern.url} />
		</div>
	</Link>;

export default Item;
