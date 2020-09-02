import React from 'react';
import styled from 'styled-components';

import Input from '../components/Input';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Button from '../components/Button';

const WrapperStyled = styled.div`
	background: #303136;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const AuthBoxStyled = styled.div`
	width: 480px;
	/* height: 564px; */
	padding: 32px;
	background: #36393f;
	box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	box-sizing: border-box;
`;

const FieldWrapperStyled = styled.div`
	margin-bottom: 20px;
`;

const Auth = () => (
	<WrapperStyled>
		<AuthBoxStyled>
			<FieldWrapperStyled>
				<Title>Create an account</Title>
			</FieldWrapperStyled>
			<FieldWrapperStyled>
				<SubTitle>Email</SubTitle>
				<Input />
			</FieldWrapperStyled>
			<FieldWrapperStyled>
				<SubTitle>Username</SubTitle>
				<Input />
			</FieldWrapperStyled>
			<FieldWrapperStyled>
				<SubTitle>Password</SubTitle>
				<Input type='password' />
			</FieldWrapperStyled>
			<FieldWrapperStyled>
				<Button>Continue</Button>
			</FieldWrapperStyled>
		</AuthBoxStyled>
	</WrapperStyled>
);

export default Auth;
