import * as React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Logo} from 'Components/shared/Vectors/index';

type TTheme = {
	theme: {
		spacer: string;
	},
};

const
	LinkStyle = {
		display: 'flex',
		alignItems: 'center',
		fontSize: '30px',
		textTransform: 'uppercase',
		textDecoration: 'none',
		color: '#212121',
	};

const
	LogoText = styled.span`
		margin-left: ${(props: TTheme) => props.theme.spacer};
	`;

const Logotype = () => {
	return(
		<Link to="/" style={LinkStyle}>
			<Logo
				width={32}
				height={32}
			/>
			<LogoText>Pattern finder</LogoText>
		</Link>
	);
};

export default Logotype;
