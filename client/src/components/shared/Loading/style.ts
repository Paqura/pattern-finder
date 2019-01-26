import styled from 'styled-components';

export const
	LoadingComponent: any = styled.div`
		visibility: ${(props: {show: boolean}) => props.show ? 'visible' : 'hidden'};
		width: 100vw;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
		font-size: 32px;
		font-weight: 500;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: hsla(0, 3%, 34%, 0.5);
	`;