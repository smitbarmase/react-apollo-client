import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.input`
	background: #30333a;
	width: 100%;
	height: 40px;
	padding: 10px;
	box-sizing: border-box;
	font-size: 16px;
	border-radius: 3px;
	border: 1px solid #24272c;
	color: white;
	:focus {
		outline: 1px solid #7289d9;
	}
`;

const Input = ({ type = 'text' }: { type?: string }) => (
	<WrapperStyled type={type}></WrapperStyled>
);

export default Input;
