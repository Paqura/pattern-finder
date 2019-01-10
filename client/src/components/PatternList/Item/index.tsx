import * as React from 'react';
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
	}) => <div key={props.pattern.id}>
	<Pic src={props.pattern.url} />
</div>;

export default Item;