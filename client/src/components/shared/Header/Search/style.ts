import styled from 'styled-components';

export const FormSection = styled.div`
	display: flex;
	position: relative;
`;

export const SearchField = styled.input`
	margin-left: 45px;
	background: #f9f9fb;
	border: 0;
	border-radius: 0;
	border-radius: 8px;
	box-sizing: border-box;
	color: #40354e;
	display: block;
	font-family: inherit;
	font-size: 16px;
	font-weight: 500;
	line-height: 18px;
	outline: none;
	padding: 14px 0 14px 16px;
	width: 550px;
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	font-weight: 400;
	transition: box-shadow 400ms cubic-bezier(0.215, 0.610, 0.355, 1);

	&:focus {
		box-shadow: 2px 2px 9px 0px #e4e0e0;
		background: #ffffff;
	}
`;
