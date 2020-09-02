import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 16px;
	box-sizing: border-box;
	font-size: 24px;
	color: white;
	font-weight: 500;
`;

const Title = ({ children }: { children: string }) => (
	<WrapperStyled>{children}</WrapperStyled>
);

export default Title;
