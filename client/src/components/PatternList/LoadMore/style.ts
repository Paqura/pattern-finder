import styled from 'styled-components';

export const
	LoadMoreButton = styled.button`
		width: 100%;
		border: none;
		padding: 16px 0;
		cursor: pointer;
		font-weight: 500;
		font-size: 18px;
		letter-spacing: 1px;
		margin-top: 0;
		color: rgb(33, 33, 33);
		background-color: hsla(0, 17%, 96%, 0.49);

		&:hover {
			background-color: hsla(0, 17%, 96%, 0.79);
			transition: 200ms linear;
		}
	`;