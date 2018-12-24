import styled from 'styled-components';

const borderStyle = '1px solid #d9dbe1';

export const Button: any = styled.button`
	border: ${(props: {hasBorder: boolean}) => props.hasBorder ? borderStyle : 'none'};
	display: inline-block;
	color: #98a0ad;
	fill: currentColor;
	background-color: #fff;
	padding: 0.5rem 0.7rem;
	font-size: 14px;
	border-radius: 4px;
	transition: all 0.2s ease-in-out;
	cursor: pointer;
	text-decoration: none;

	&:hover {
		color: #111111;
	}
`;
