import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {
	ApolloClient,
	InMemoryCache,
	NormalizedCacheObject,
	ApolloProvider,
} from '@apollo/client';

import Auth from './pages/Auth';
import './index.css';

const WrapperStyled = styled.div`
	height: 100vh;
`;

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
	uri: 'http://localhost:4000/graphql',
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<WrapperStyled>
				<Auth />
			</WrapperStyled>
		</ApolloProvider>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
