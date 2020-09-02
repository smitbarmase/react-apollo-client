import React, { Props } from 'react';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';

import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Button from '../components/Button';

import InputStyled from '../styled/InputStyled';

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

// const GET_HELLO = gql`
// 	query {
// 		hello
// 	}
// `;

type AuthProps = {};

type AuthState = {
	email: string;
	username: string;
	password: string;
};

class Auth extends React.Component<AuthProps, AuthState> {
	// const { data, loading, error } = useQuery(GET_HELLO);

	// if (loading) return <p>Loading!</p>;
	// if (error) return <p>ERROR</p>;
	// if (!data) return <p>Not found</p>;
	state = {
		email: '',
		username: '',
		password: '',
	};

	render() {
		return (
			<WrapperStyled>
				<AuthBoxStyled>
					<FieldWrapperStyled>
						<Title>Create an account</Title>
					</FieldWrapperStyled>
					<FieldWrapperStyled>
						<SubTitle>Email</SubTitle>
						<InputStyled value={this.state.email} />
					</FieldWrapperStyled>
					<FieldWrapperStyled>
						<SubTitle>Username</SubTitle>
						<InputStyled value={this.state.username} />
					</FieldWrapperStyled>
					<FieldWrapperStyled>
						<SubTitle>Password</SubTitle>
						<InputStyled type='password' value={this.state.password} />
					</FieldWrapperStyled>
					<FieldWrapperStyled>
						<Button>Continue</Button>
					</FieldWrapperStyled>
				</AuthBoxStyled>
			</WrapperStyled>
		);
	}
}

export default Auth;
