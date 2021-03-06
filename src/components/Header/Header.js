import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Navigation from '../Navigation';

import { CONDUIT } from '../../constants';

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-height: 5em;
`;

const StyledDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const StyledLink = styled(Link)`
	font-size: 1.5em;
	font-weight: bold;
	text-decoration: none;
`;

const Header = () => (
	<StyledHeader>
		<div className="container">
			<StyledDiv>
				<StyledLink to="/">{CONDUIT.toUpperCase()}</StyledLink>
				<Navigation />
			</StyledDiv>
		</div>
	</StyledHeader>
);

export default Header;
