import React from 'react';
import styled from 'styled-components';
import { gql, useMutation } from '@apollo/client';

import Title from '../components/Title';
import SubTitle from '../components/SubTitle';

import InputStyled from '../styled/InputStyled';
import ButtonStyled from '../styled/ButtonStyled';

const WrapperStyled = styled.div`
	background: #303136;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const AuthBoxStyled = styled.div`
	width: 480px;
	padding: 32px;
	background: #36393f;
	box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	box-sizing: border-box;
`;

const FieldWrapperStyled = styled.div`
	margin-bottom: 20px;
`;

// data: {
// 	name: "Smit Barmase"
// 	username: "smitbarmase"
// 	password: "hehehehe"
// 	email: "smitbarmase@outlook.com"
// }

const CREATE_ACCOUNT = gql`
	mutation CreateAccount($data: String!) {
		createUser(type: $data) {
			name
			username
			email
			id
		}
	}
`;

const Auth = () => {
	const [createAccount, { data, loading, error }] = useMutation(CREATE_ACCOUNT);

	// if (loading) return <p>Loading!</p>;
	// if (error) return <p>ERROR</p>;
	// if (!data) return <p>Not found</p>;

	const [email, setEmail] = React.useState('');
	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');

	return (
		<WrapperStyled>
			<AuthBoxStyled>
				<FieldWrapperStyled>
					<Title>Create an account</Title>
				</FieldWrapperStyled>
				<FieldWrapperStyled>
					<SubTitle>Email</SubTitle>
					<InputStyled
						value={email}
						onChange={(e) => setEmail(e.currentTarget.value)}
					/>
				</FieldWrapperStyled>
				<FieldWrapperStyled>
					<SubTitle>Username</SubTitle>
					<InputStyled
						value={username}
						onChange={(e) => setUsername(e.currentTarget.value)}
					/>
				</FieldWrapperStyled>
				<FieldWrapperStyled>
					<SubTitle>Password</SubTitle>
					<InputStyled
						type='password'
						value={password}
						onChange={(e) => setPassword(e.currentTarget.value)}
					/>
				</FieldWrapperStyled>
				<FieldWrapperStyled>
					<ButtonStyled onClick={() => createAccount()}>Continue</ButtonStyled>
				</FieldWrapperStyled>
			</AuthBoxStyled>
		</WrapperStyled>
	);
};

export default Auth;
