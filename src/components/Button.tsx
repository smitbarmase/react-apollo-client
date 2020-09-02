import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.button`
	background: #7289da;
	width: 100%;
	height: 44px;
	padding: 2px 16px;
	box-sizing: border-box;
	font-size: 16px;
	border: none;
	border-radius: 3px;
	color: white;
	outline: none;
	cursor: pointer;
`;

const Button = ({ children }: { children: string }) => (
	<WrapperStyled>{children}</WrapperStyled>
);

export default Button;
