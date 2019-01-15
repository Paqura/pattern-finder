import styled from 'styled-components';

export const Pic = styled.img`
	width: 100%;
	height: 100%;
	display: block;
	will-change: transform;
	transition: 180ms transform cubic-bezier(0.175, 0.885, 0.32, 1.275);

	&:hover {
		transform: scale(1.05);
	}
`;
