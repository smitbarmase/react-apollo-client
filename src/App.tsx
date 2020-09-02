import React from 'react';
import styled from 'styled-components';

import Auth from './pages/Auth';

const WrapperStyled = styled.div`
	height: 100vh;
`;

function App() {
	return (
		<WrapperStyled>
			<Auth />
		</WrapperStyled>
	);
}

export default App;
