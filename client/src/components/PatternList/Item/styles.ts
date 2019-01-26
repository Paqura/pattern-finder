import styled from 'styled-components';

export const
	PatternView = styled.img`
		width: 225px;
		height: 225px;
		object-fit: scale-down;
		display: block;
	`,

	PatternSquare = styled.span`
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 12px;
		background-color: #ffffff;
		box-shadow:
				inset 2px 0 0 2px rgba(0,0,0,.02);

		transition: box-shadow 200ms cubic-bezier(0.165, 0.84, 0.44, 1);

		&:hover {
			transition: box-shadow 200ms cubic-bezier(0.165, 0.84, 0.44, 1);

			box-shadow:
				inset 0 0 0 1px rgba(0,0,0,.03),
				8px 14px 38px rgba(39,44,49,.06),
				1px 3px 8px rgba(39,44,49,.03);
		}
`;
