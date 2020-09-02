import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 16px;
	margin: 8px 0px;
	box-sizing: border-box;
	font-size: 12px;
	color: #8e9297;
	font-weight: 600;
`;

const SubTitle = ({ children }: { children: string }) => (
	<WrapperStyled>{children.toUpperCase()}</WrapperStyled>
);

export default SubTitle;
