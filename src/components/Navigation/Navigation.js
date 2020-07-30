import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { NAVIGATION } from '../../constants';

const StyledUl = styled.ul`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 0;
	border: 1px solid #939393;
`;

const StyledLi = styled.li`
	margin-right: 0.5em;
	list-style: none;
	&:last-child {
		margin-right: 0;
	}
`;

const StyledLink = styled(Link)`
	display: flex;
	padding: 0.5em;
	font-size: 1.2em;
	font-weight: bold;
	text-decoration: none;
	&:hover {
		background: #dadada;
	}
}
`;

const Navigation = () => (
	<nav>
		<StyledUl>
			{NAVIGATION.ITEMS.PUBLIC.map((item, index) => (
				<StyledLi key={`nav-item-${index}`}>
					<StyledLink to={item.url}>{item.title}</StyledLink>
				</StyledLi>
			))}
		</StyledUl>
	</nav>
);

export default Navigation;
