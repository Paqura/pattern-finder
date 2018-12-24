import * as React from 'react';
import styled from 'styled-components';

type ContainerProps = {
	children: any;
};

const Container = styled.div`
	max-width: 1020px;
	margin: 0 auto;
`;

export default (props: ContainerProps) => {
	return(
		<Container>
			{props.children}
		</Container>
	);
};
