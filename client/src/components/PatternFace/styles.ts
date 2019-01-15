import styled from 'styled-components';

export const
	PatternGrid = styled.div`
		display: flex;
	`,

	PatterStrip: any = styled.div`
		width: 100%;
		margin-top: 16px;
		height: 60px;
		background-image: url('${(props: {path: string}) => props.path}');
	`,

	PatternSquare = styled.span`
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 12px;
		background-color: #ffffff;
		box-shadow: inset 0 0 0 1px rgba(0,0,0,.03), 8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03);
	`;