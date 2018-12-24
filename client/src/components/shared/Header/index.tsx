import * as React from 'react';
import Logotype from './Logotype/index';
import Search from './Search/index';
import Controls from './Controls/index';
import Container from 'Components/shared/Container/index';

import styled from 'styled-components';

const HeaderWrapper = styled.section`
	width: 100%;
	border-bottom: 1px solid #eaeaea;
`;

const Area = styled.header`
	height: 85px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Header = () => {
	return(
		<HeaderWrapper>
			<Container>
				<Area>
					<Logotype />
					<Search />
					<Controls />
				</Area>
			</Container>
		</HeaderWrapper>
	);
};

export default Header;
