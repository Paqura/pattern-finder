import * as React from 'react';
import styled from 'styled-components';

const SearchIcon = styled.svg`
	position: absolute;
	top: 13px;
	right: 13px;
	width: 20px;
	height: 20px;
	stroke: #b9bec9;
	cursor: pointer;

	&:hover {
		stroke: #8c95a5;
	}
`;

export default (props: {
	width: number,
	height: number,
}) => <SearchIcon
		className="search-icon"
		width={props.width}
		height={props.height}
		viewBox="0 0 26 26"
	>
		<g fill="none" fillRule="evenodd" strokeWidth="2.5">
			<path d="M19.5 10.5a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"></path>
			<path strokeLinecap="round" d="M17 17l4.927 4.927"></path>
		</g>
	</SearchIcon>;
