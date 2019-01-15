import styled from 'styled-components';

export const Block: any = styled.div`
	margin-top: ${(props: {top?: number}) => props.top ? props.top : 0}px;
	margin-bottom: ${(props: {bottom?: number}) => props.bottom ? props.bottom : 0}px;
	margin-left: ${(props: {left?: number}) => props.left ? props.left : 0}px;
	margin-right: ${(props: {right?: number}) => props.right ? props.right : 0}px;
`;
