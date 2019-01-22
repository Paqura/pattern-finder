import styled from 'styled-components';

export const
	Item = styled.li`
		display: flex;
		background: #f7f6f6;
		border: 1px solid #fafafa;
		transition: 120ms border cubic-bezier(0.075, 0.82, 0.165, 1);

		&:hover {
			border: 1px solid #dedede;
		}
	`,

	LinkStyle = {
		width: '100%',
		height: '100%',
		padding: '7px 12px',
		display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
	};